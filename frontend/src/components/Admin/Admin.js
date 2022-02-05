import React from "react";

class Admin extends React.Component{

state={
    namee:null,
    sname:null,
    password:null

};

onChange=event=>{
  
const{name,value}=event.target;
this.setState(
    {
        [name]:value
    }
);

};


render(){
    return(
            <form >
                    <h1>Kayıt </h1>
                  <div><label>Ad </label><input name= "namee"  onChange={this.OnChange} />  </div>
                  <div><label>Soyad </label><input name= "sname" onChange={this.OnChange} />  </div>
                  <div><label>Şifre </label><input name= "password" onChange={this.OnChange} />  </div>
                  
                    <div>  <button > Gönder </button></div>


            </form>
          
    );
}


}
export default Admin;