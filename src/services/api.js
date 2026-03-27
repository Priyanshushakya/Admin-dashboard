import data from "../data/mockData.json";

export const getSalesData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data.sales), 500);
    });
};

export const getInventory = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data.inventory), 500);
    });
};

export const getPayments = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data.payments), 500);
    });
};

export const getShipments = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data.shipments), 500);
    });
};
