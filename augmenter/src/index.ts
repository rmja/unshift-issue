import { Person } from "original";

declare module "original" {
    interface Person {
        name(): string;
    }
  }

  Person.prototype.name = () => "bob";