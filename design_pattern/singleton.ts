class DatebaseConnection {
  private static instance: DatebaseConnection;
  private connectionString: string;
  private isConnected: boolean = false;

  /**
   * Private constructor to prevent instantiation
   */
  constructor() {
    this.connectionString = "postgresql://localhost:5432/mydb";
  }

  /**
   * Method to get the singleton instance of databaseConnection
   * @returns {databaseConnection} the singleton instance
   */
  public static getInstance(): DatebaseConnection {
    if (!DatebaseConnection.instance) {
      DatebaseConnection.instance = new DatebaseConnection();
    }

    return DatebaseConnection.instance;
  }

  /**
   * Method to connect to the database
   */
  public connect(): void {
    if (!this.isConnected) {
      console.log(`connection to db at ${this.connectionString}...`);
      this.isConnected = true;
    } else {
      console.log("Already connected to db");
    }
  }

  public query(sql: string): string[] {
    if (!this.isConnected) {
      throw new Error("Database not connected. connect first");
    } else {
      return [`Result for query: ${sql}`];
    }
  }
}

const db1 = DatebaseConnection.getInstance();
const db2 = DatebaseConnection.getInstance();
console.log(db1 === db2); // true
db1.connect();
db2.connect(); // Already connected to db
db2.connect(); // Already connected to db
db2.connect(); // Already connected to db
db2.connect(); // Already connected to db
