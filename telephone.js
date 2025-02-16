// Telephone class using the Observer Pattern
class Telephone {
    constructor() {
        this.phoneNumbers = new Set(); // Stores phone numbers
        this.observers = new Set();   // Stores observer functions
    }

    // Add a phone number
    AddPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    // Remove a phone number
    RemovePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    // Dial a phone number (Only if it exists in the list)
    DialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Error: ${number} not found in contact list.`);
        }
    }

    // Add an observer
    AddObserver(observer) {
        this.observers.add(observer);
    }

    // Remove an observer
    RemoveObserver(observer) {
        this.observers.delete(observer);
    }

    // Notify all observers when a number is dialed
    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

// Observer class
class Observer {
    constructor(name, action) {
        this.name = name;
        this.action = action;
    }

    update(number) {
        this.action(number);
    }
}

// Create a telephone instance
const phone = new Telephone();

// Create observers
const printObserver = new Observer("PrintObserver", (number) => console.log(`Observer: ${number}`));
const dialObserver = new Observer("DialObserver", (number) => console.log(`Now Dialling ${number}`));

// Add observers to the telephone
phone.AddObserver(printObserver);
phone.AddObserver(dialObserver);

// Add and dial phone numbers
phone.AddPhoneNumber("2347023232");
phone.AddPhoneNumber("1234567890");
phone.DialPhoneNumber("2347023232");
phone.DialPhoneNumber("9876543210"); // Should show an error
