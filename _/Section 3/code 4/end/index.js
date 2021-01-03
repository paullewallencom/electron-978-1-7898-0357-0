const electron = require("electron");
const uuid = require("uuid");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let todayWindow;
let createWindow;
let listWindow;

let allAppointments = [];

app.on("ready", () => {
  todayWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    title: "Doctor Appointment"
  });
  todayWindow.loadURL(`file://${__dirname}/today.html`);
  todayWindow.on("closed", () => {
    app.quit();
    todayWindow = null;
  });

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const createWindowCreator = () => {
  createWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 600,
    height: 400,
    title: "Create New Appointment"
  });

  createWindow.setMenu(null);

  createWindow.loadURL(`file://${__dirname}/create.html`);

  createWindow.on("closed", () => (createWindow = null));
};

const listWindowCreator = () => {
  listWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 600,
    height: 400,
    title: "All Appointments"
  });

  listWindow.setMenu(null);

  listWindow.loadURL(`file://${__dirname}/list.html`);

  listWindow.on("closed", () => (listWindow = null));
};

ipcMain.on("appointment:create", (event, appointment) => {
  appointment["id"] = uuid();
  appointment["done"] = 0;
  allAppointments.push(appointment);

  //update today window
  createWindow.close();
  console.log(allAppointments);
});

ipcMain.on("appointment:request:list", event => {
  console.log("here");
});

ipcMain.on("appointment:request:today", event => {
  console.log("here2");
});

ipcMain.on("appointment:done", (event, id) => {
  console.log("here3");
});

const menuTemplate = [
  {
    label: "File",

    submenu: [
      {
        label: "New Appointment",

        click() {
          createWindowCreator();
        }
      },

      {
        label: "All Appointments",

        click() {
          listWindowCreator();
        }
      },

      {
        label: "Quit",

        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",

        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: "View",
    submenu: [{ role: "reload" }, { role: "toggledevtools" }]
  }
];
