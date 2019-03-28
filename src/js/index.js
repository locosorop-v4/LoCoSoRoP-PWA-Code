//Connect with a bluetooth device!
// MAC Adress: b8:27:eb:95:73:91
console.log('connection to Robot');
if(navigator.bluetooth == 'undifined'){
    alert('Scuk a dick')
}
var RPI_GPIO_SERVICE_UUID       = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';

document.querySelector('#search-bluetooth').addEventListener('pointerup', (event) => {
    console.log('we are gonna search for bluetooth devices');
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
        .then(device => { 
            console.log(device) 
            //connect with server of device
            return device.gatt.connect();
        })
        .then(server => { 
            console.log(server) 
            
        })
        .catch(error => { console.log(error); });
    // Call navigator.bluetooth.requestDevice
  });