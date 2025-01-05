/* Reset default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
  
  .container {
    width: 80%;
    margin: 0 auto;
  }
  
  header {
    background-color: #fff;
    padding: 30px 30px 50px 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: fit-content;
  }
  
  .logo img {
    width: 85px;
    padding-top: 0px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    float: inline-start;
  }
  nav{
    display:inline;
  }
  nav ul {
    list-style-type: none;
    display: flex;
    float: left;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 14px;
    padding: 27px ;
    padding-right: 10px;
    padding-left: 10px;
    transition: border-bottom 0.3s ease;
  }
  
  nav ul li a:hover {
    border-bottom: 5px solid #f84471;
  }
  
  .user-actions {
    margin-left: auto;
    margin: auto;
    display: flex;
    float: inline-end;
  }
  
  .btn {
    text-decoration: none;
    padding: 8px 16px;
    color: #f84471;
    border: 2px solid #f84471;
    background-color: #fff;
    border-radius: 4px;
    margin-left: 10px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #f84471;
    color: #fff;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #f84471;
    color: #fff;
  }
  .btn-primary:hover{
    background-color: #fff;
    color:#f84471;
  }
 body{
  background-color: #fbedec;
 }
  .banner img {
    width: 100%;
    display: block;
  }

  main{
    padding-top: 20px;
  }
  #wishlist-items{
    list-style: none;
    padding-top: 45px;
  }
  .dlt{
    background-color:#fff;
    color:#f84471;
    border-radius: 15%;
    border-color: #f84471;
    padding-right: 3px;
    padding-left: 3px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-style:solid;
    float:right;
    margin-right: 10px;
}
.dlt:hover{
  cursor: pointer;
}
.item{
  background-color: #fff;
  border-radius: 1.5%;
  padding: 20px 0px 20px 20px;
  margin-top: 6px;
}
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: visible;
}

/* The actual popup */
.popuptext {
  margin-top: 0px;
  overflow-y: scroll !important;
  visibility: hidden;
  width: 300px;
  height: 35px;
  background-color: #555;
  color: #fff;
  border-radius: 6px;
  padding-top: 2px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -80px;
}
.sUser{
  margin-top: 2px;
  margin-bottom: 2px;
  float: left;
  margin-left: 10px;
  font-size:14px;
}
.btn-remove {
    margin-left: 2px;
    float:right;
    margin-right: 10px;
    flex-direction: row;
}
.popup .popuptext2 {
  visibility: hidden;
  background-color: #555;
  width: 230px;
  color: #fff;
  display: inline;
  border-radius: 6px;
  padding: 2px 2px 6px 2px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popuptext::after {
  content: "";
  position: absolute;
  height:5px;
  bottom: 97%;
  left: 30%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #555 transparent;
}
.popup .popuptext2::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 40%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

  .footer {
  position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   padding: 10px;
   background-color: #f84471;
   color: white;
   text-align: center;
  }
  