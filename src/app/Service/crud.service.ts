import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { Observable } from 'rxjs';
import { Administrative } from '../Entity/Administrative.Entity';
import { Avance } from '../Entity/Avance.Entity';
import { Conge } from '../Entity/Conge.Entity';
import { Permutation } from '../Entity/Permutation.Entity';
import { Permission } from '../Entity/Permission.Entity';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Emargement } from '../Entity/Emargement.Entity';
import { Brief } from '../Entity/Brief.Entity';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl="http://localhost:8081/" 
  loginUserUrl="http://localhost:8081/admin/login"
  helper=new JwtHelperService();
  constructor(private http:HttpClient) { } 
  /* lajouter */
  addadmin(admin:Admin){ this.apiUrl+"/admin"
    return this.http.post<any>(this.apiUrl+"/admin",admin);}
    deleteAdmin(id : number){
      const url = `${this.apiUrl+"/admin"}/${id}`
      return this.http.delete(url  )
    }
    getAdmins(): Observable<Admin[]>{
      return this.http.get<Admin[]>(this.apiUrl + "/admin");
    }

    addadministrative(administrative:Administrative){ this.apiUrl+"/administrative"
    return this.http.post<any>(this.apiUrl+"/administrative",administrative);}
    deleteAdministrative(id : number){
      const url = `${this.apiUrl+"/administrative"}/${id}`
      return this.http.delete(url  )
    }
    getAdministratives(): Observable<Administrative[]>{
      return this.http.get<Administrative[]>(this.apiUrl + "/administrative");
    }


    addavance(avance:Avance){ this.apiUrl+"/avance"
    return this.http.post<any>(this.apiUrl+"/avance",avance);}
    deleteAvance(id : number){
      const url = `${this.apiUrl+"/avance"}/${id}`
      return this.http.delete(url  )
    }
    getAvances(): Observable<Avance[]>{
      return this.http.get<Avance[]>(this.apiUrl + "/avance");
    }

    addconge(conge:Conge){ this.apiUrl+"/conge"
    return this.http.post<any>(this.apiUrl+"/conge",conge);}
    deleteConge(id : number){
      const url = `${this.apiUrl+"/conge"}/${id}`
      return this.http.delete(url  )
    }
    getConges(): Observable<Conge[]>{
      return this.http.get<Conge[]>(this.apiUrl + "/conge");
    }

    loginAdmin(admin:Admin){
      return this.http.post<any>(this.loginUserUrl, admin);
    }

    addpermutation(permutation:Permutation){ this.apiUrl+"/permutation"
    return this.http.post<any>(this.apiUrl+"/permutation",permutation);}
    deletePermutation(id : number){
      const url = `${this.apiUrl+"/permutation"}/${id}`
      return this.http.delete(url  )
    }
    getPermutations(): Observable<Permutation[]>{
      return this.http.get<Permutation[]>(this.apiUrl + "/permutation");
    }

    addpermission(permission:Permission){ this.apiUrl+"/permission"
    return this.http.post<any>(this.apiUrl+"/permission",permission);}
    deletePermission(id : number){
      const url = `${this.apiUrl+"/permission"}/${id}`
      return this.http.delete(url  )
    }
    getPermissions(): Observable<Permission[]>{
      return this.http.get<Permission[]>(this.apiUrl + "/permission");
    }

    addemargement(emargement:Emargement){ this.apiUrl+"/emargement"
    return this.http.post<any>(this.apiUrl+"/emargement",emargement);}
    deleteEmargement(id : number){
      const url = `${this.apiUrl+"/emargement"}/${id}`
      return this.http.delete(url  )
    }
    getEmargements(): Observable<Emargement[]>{
      return this.http.get<Emargement[]>(this.apiUrl + "/emargement");
    }

    addbrief(brief:Brief){ this.apiUrl+"/brief"
    return this.http.post<any>(this.apiUrl+"/brief",brief);}
    deleteBrief(id : number){
      const url = `${this.apiUrl+"/brief"}/${id}`
      return this.http.delete(url  )
    }
    getBriefs(): Observable<Brief[]>{
      return this.http.get<Brief[]>(this.apiUrl + "/brief");
    }

    userDetails(){
      let token:any=localStorage.getItem('myToken');
      let decodeToken= this.helper.decodeToken(token);
       return decodeToken.data;
     }
}
