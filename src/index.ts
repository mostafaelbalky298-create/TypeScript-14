//1-Base Class – User

class User {
    private Id: number;
    public name: string;
    public email: string;
    private Password: string;
    protected Phone: string;
    private age: number;

    //Aggregation – User and Notebook
    public notebooks: NoteBook[];

    constructor(Id: number, name: string, email: string,
                Password: string, Phone: string, age: number) {

        this.Id = Id;
        this.name = name;
        this.email = email;
        this.Password = Password;
        this.Phone = Phone;

        this.notebooks = [];
        

        if (age >= 18 && age <= 60) {
            this.age = age;
        } else {
            throw new Error("Age must be between 18 and 60");
        }
    }

    public displayInfo(): void {
        console.log("ID: " + this.Id);
        console.log("Name: " + this.name);
        console.log("Email: " + this.email);
        console.log("Phone: " + this.Phone);
        console.log("Age: " + this.age);
    }

    public addNote(notebook:NoteBook):void{
        this.notebooks.push(notebook)
    }
}

//---------------------------------------------------------------------------//

//2-Inheritance – Admin User

class AdminUser extends User{
     constructor(Id: number, name: string, email: string,
                Password: string, Phone: string, age: number) {

        super(Id, name, email, Password, Phone, age);
    }

    public manageNotes(): void {
        console.log("Admin can manage notes");
    }
}

//--------------------------------------------------------------------------//

//3-Class - Note

class Note {
    Id:number;
    title:string;
    content:string;

    //Association – Note and User
    author:User;

    constructor(Id:number, title:string, content:string, userId:number, author:User){
        this.Id=Id;
        this.title=title;
        this.content=content;
        this.author=author
    }

    public preview(): string {
        return this.content.substring(0, 20);
    }
}

//--------------------------------------------------------------------------//


//4-Composition– NoteBook and Notes

class NoteBook {
    notes:Note[];

    constructor(notes:[]){
        this.notes=[];
    }

    public addNote(note:Note):void{
        this.notes.push(note)
    }

    public removeNote(Id: number): void {
        this.notes = this.notes.filter(note => note.Id !== Id);
    }
}

//-------------------------------------------------------------------//


//7- Generics– Data Storage

class DataStorage <T> {
    private data: T[] = [];

    public add(item: T): void {
        this.data.push(item);
    }

    public removeItem(item: T): void {
        this.data = this.data.filter(x => x !== item);
    }

    public getAll(): T[] {
        return this.data;
    }
}