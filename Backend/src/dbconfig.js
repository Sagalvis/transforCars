import {createPool} from "mysql2/promise";

export const pool = createPool({
  host:"192.168.12.24",
  user: "root",
  password: '',
  port:"3306",
  database:"tranforcaroficial"
 
})