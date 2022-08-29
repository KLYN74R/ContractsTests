import {JSON} from "assemblyscript-json";


class Vector2D {

    //Coordinates
    x: f32;
    y: f32;

    //Vector moniker
    alias:string;

    constructor(x: f32, y: f32, alias:string) {
        
        this.x = x;
        this.y = y;
        this.alias=alias;

    }


    Magnitude(x:f32,y:f32): f32 {

        return Mathf.sqrt(x * x + y * y);
    
    }


    add(vec2: Vector2D): Vector2D {
        
        this.x += vec2.x;
        this.y += vec2.y;
        return this;
        
    }

}

//Accept 2 vectors and return object with concatenated aliases and sum of Magnitude
export function getCommonAliasAndMagnitudeSum(vector1:string,vector2:string):string {


    //Deserialize
    let v1: JSON.Obj = <JSON.Obj>(JSON.parse(vector1)),
    
        v2: JSON.Obj = <JSON.Obj>(JSON.parse(vector2));



    //Concat aliases
    let alias1 = v1.getString("alias"),
        alias2 = v2.getString("alias")

    if(alias1!==null && alias2!==null){

        return alias1._str + " & " + alias2._str;

    }else return "Error";


}
