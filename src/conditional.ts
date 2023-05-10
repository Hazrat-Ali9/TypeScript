type TypeA = string;
//type TypeB = TypeA extends string ? string : null;
type TypeC = string;
type TypeD = boolean;

// string extends number => string extends string => string
type TypeE = TypeA extends number ? number : TypeC extends string ? string : null;