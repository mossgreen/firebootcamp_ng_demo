export interface Todo{
    text:string,
    done:boolean,
    archived:boolean,
}

//named Todo interface without an I. 
//According to TypeScript coding guide and Angular style guide I is not recommended.