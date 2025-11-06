import { MouseEventHandler } from "react";


export interface CustomButtonProps {
  title : string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement> ;
  btnType?:'button' | 'submit';
} 


export interface SearchManufacturerProps {
  manufacturer : string;
  setManufacturer:  (manufacturer: string | null ) => void;
}

export interface CarProps{
id:number
make_model_id:number
name:string
description:string
msrp:number
invoice:number
created:string
modified:string
}