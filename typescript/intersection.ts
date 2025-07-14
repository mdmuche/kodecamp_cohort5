type Interviewee = {
  name: string;
  age: number;
};

type Staff = {
  employeeId: string;
  department: string;
};

type HiredStaff = Interviewee & Staff;

let worker: HiredStaff = {
  name: "john",
  age: 23,
  employeeId: "abc123",
  department: "engineering",
};
