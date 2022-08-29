import { JSON } from 'json-as'


@json
class JSONSchema {
  firstName: string
  lastName: string
  age: i32
}

const data: JSONSchema = {
  firstName: 'Emmet',
  lastName: 'Smith',
  age: 23,
}

const stringified = JSON.stringify(data);

export function stin():string{

    return stringified;

}