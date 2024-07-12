import { UserType } from "./User.type";

export type TicketType = {
  _id: string;
  title: string;
  body: string;
  user: UserType;
  department: {
    title: string;
    _id: string;
  };
  subDepartment: {
    _id: string;
    title: string;
    department: string;
  };
  priority: string;
  hasAnswer: boolean;
  isAnswer: boolean;
};
