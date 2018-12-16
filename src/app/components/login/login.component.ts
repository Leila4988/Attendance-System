import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../domain/as'
//import { USERS } from 'src/app/mock-as';
import { LoginService } from '../../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';

export class Inuser{
  id:string;
  password:string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LogInComponent implements OnInit {

  constructor(private loginService: LoginService, private _router: Router) { }

  users : User[];
  inuser: Inuser = {
    id: "",
    password: ""
  };

  ngOnInit() {
    //由服务去获取用户列表数据
    this.loginService.getUsers().then(users => this.users = users);
  }

  check(){
    for ( var k=0 ; k<this.users.length ; k++ )
    {
      if ( this.inuser.id == this.users[k].id )
      {
        if ( this.inuser.password == this.users[k].password )
        {
          //根据用户类型，路由到不同的组件里
          if(this.inuser.id[0]=='1'){
            alert("登录成功");
            setTimeout(()=>{
              this._router.navigateByUrl('/user/' + this.inuser.id);
            })
          }
          else{
            setTimeout(()=>{
              this._router.navigateByUrl('/manager/' + this.inuser.id);
            })
          }
          break;
        }
      }
       if ( k == (this.users.length-1) )
       {
        alert("用户名或密码错误!");
       }
    }
  }
}
