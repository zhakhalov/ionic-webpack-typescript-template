
interface BluetoothSerial {
    connect(macAddress_or_uuid: string, success: () => any, failure: (err: any) => any);
    connectInsecure(macAddress: string, success: () => any, failure: (err: any) => any);
    disconnect(success?: () => any, failure?: (err: any) => any);
    write(data: ArrayBuffer, success?: () => any, failure?: (err: any) => any);
    available(success?: () => any, failure?: (err: any) => any);
    read();
    readUntil();
    subscribe();
    unsubscribe();
    subscribeRawData();
    unsubscribeRawData();
    clear();
    list();
    isEnabled();
    isConnected();
    readRSSI();
    showBluetoothSettings();
    enable();
    discoverUnpaired();
    setDeviceDiscoveredListener();
    clearDeviceDiscoveredListener();
    setName();
    setDiscoverable();
}