import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarea } from '../modelos/Tarea';
import { FormsModule, NgForm } from '@angular/forms';
import { TareaNew } from '../modelos/TareaNew';
import { TareaServicioService } from '../tarea-servicio.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})

export class TodoformComponent implements OnInit {

  fechaActual: string = new Date().toISOString().split('T')[0];

  nuevaTarea: TareaNew = {
    titulo: "",
    estado: "",
    fecha: this.fechaActual
  };

  constructor(public tareaServicio: TareaServicioService, private toastr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {

  }

  registrar(): void {
    this.tareaServicio.registrarTarea(this.nuevaTarea).subscribe(
      (tareaRegistrada) => {
        // La tarea ha sido registrada con éxito y ahora incluirá el ID generado por el servidor

        this.toastr.success('Se registro la tarea', 'Éxito');
        this.tareaServicio.cargarTareas()
        this.router.navigate(['/list']);

      },
      (error) => {
        console.error('Error al registrar nueva tarea:', error);
      }
    );
  }

}
