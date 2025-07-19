type UserName = string;
type Age = number;
type isActive = boolean;

const age: Age = 23;

// object type aliases
type User = {
  id: string;
  name: string;
  age: number;
  email?: string;
  readonly createdAt: Date;
};

const user: User = {
  id: "1234",
  name: "john doe",
  age: 23,
  createdAt: new Date(),
};

// union type aliases
type status = "pending" | "approved";
type ID = string | number;

// complex union
type Res =
  | {
      sucess: true;
      data: any;
    }
  | {
      sucess: false;
      error: string;
    };

const handleResponse = (response: Res) => {
  if (response.sucess) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
};

// function type aliases
type EventHandler = (event: Event) => void;
type Calculator = (a: number, b: number) => number;
type AsyncFetcher<T> = (url: string) => Promise<T>;

const handleClick: EventHandler = (event) => {
  console.log("button clicked");
};

const addNum: Calculator = (a, b) => {
  const someVal = "2";
  return a + b + Number(someVal);
};
