import { hubConnection } from 'signalr-no-jquery';

export default class SignalR {

    constructor() {

        this.connection = hubConnection("http://localhost:60310");
        this.proxy = this.connection.createHubProxy("mainHub");
        console.log(this.proxy);

        this.proxy.connection.start(null, () => {
            this.proxy.invoke("test", "TEST").done((arg) => {
                console.log(arg);
            })
        });

    }

}