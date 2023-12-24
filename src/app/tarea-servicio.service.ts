import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Tarea } from './modelos/Tarea';
import { TareaNew } from './modelos/TareaNew';


@Injectable({
  providedIn: 'root'
})
export class TareaServicioService {

  private apiUrl = 'http://localhost:8080';

  tareas: Tarea[] = []
  isCargando = true;

  constructor(private http: HttpClient) {
    this.cargarTareas();
  }

  obtenerTareasApi(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl + '/tareas').pipe(
      catchError((error) => {
        return throwError(error)
      }
      )
    )
  }

  cargarTareas() {
    // Al construir el servicio, puedes cargar la lista de tareas
    this.obtenerTareasApi().subscribe(tareas => {
      this.tareas = tareas;
      this.isCargando = false;
      console.log('Tareas cargadas:', this.tareas);
    }, (error) => {
      console.log('Error:', error);
    });
  }

  registrarTarea(nuevaTarea: TareaNew): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/tareas/registrar?titulo=${nuevaTarea.titulo}&estado=${nuevaTarea.estado}&fecha=${nuevaTarea.fecha}`).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  eliminarTarea(id: number): Observable<any> {
    const url = `${this.apiUrl}/tareas/eliminar/${id}`;

    return this.http.delete(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }






}
