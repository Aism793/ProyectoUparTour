
import { Observable, of } from 'rxjs';
import { Injectable} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../modals/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(private modalService: NgbModal) {
        
  }

  public handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

          if (error.status == "500") {
              this.mostrarError500(error);
          }

          if (error.status == "400") {
              this.mostrarError400(error);
          }

          return of(result as T);
      };
  }

  public log(message: string) {
     // console.log(message);
      const modalRef = this.modalService.open(AlertModalComponent);
      modalRef.componentInstance.title = 'Mensaje';
      modalRef.componentInstance.message = message;
  }

  private mostrarError500(error: any): void {
      //console.error(error);
      const modalRef = this.modalService.open(AlertModalComponent);
      modalRef.componentInstance.title = 'Mensaje de Error';
      modalRef.componentInstance.message = error;
  }

  private mostrarError400(error: any): void {
      console.error(error);
      let contadorValidaciones: number = 0;
      let mensajeValidaciones: string =
          `Señor(a) usuario(a), se han presentado algunos errores de validación, por favor revíselos y vuelva a realizar la operación.<br/><br/>`;

      for (const prop in error.error.errors) {
          contadorValidaciones++;
          mensajeValidaciones += `<strong>${contadorValidaciones}. ${prop}:</strong>`;

          error.error.errors[prop].forEach(element => {
              mensajeValidaciones += `<br/> - ${element}`;
          });

          mensajeValidaciones += `<br/>`;
      }

      const modalRef = this.modalService.open(AlertModalComponent);
      modalRef.componentInstance.title = 'Mensaje de Error';
      modalRef.componentInstance.message = mensajeValidaciones;

  }
}

