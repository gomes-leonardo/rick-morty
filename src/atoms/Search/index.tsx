import { Input } from "./style";
import { ComponentProps } from "./type";

export default function Search({ onChange,  value}: ComponentProps) {
  
  return (
    <Input onChange={onChange} value={value}></Input>
  )
}
