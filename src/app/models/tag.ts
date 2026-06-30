export class tag {
    static readonly ANGULAR = new tag('Angular', 'red');
    static readonly TYPESCRIPT = new tag('Typescript', 'darkred');
    static readonly PYTHON = new tag('Python', 'pink');
    static readonly CSHARP = new tag('C#', 'green');
    static readonly JAVA = new tag('Java', 'orange');
    static readonly NODEJS = new tag('Node.js', 'brown');
    static readonly JAVASCRIPT = new tag('Javascript', 'purple');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}