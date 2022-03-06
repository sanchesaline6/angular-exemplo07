import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  //Atributos
  public vetorCursos: Curso[];
  public curso: Curso;
  public id: number;
  nome: string;
  valor: number;
  area: string;
  //Construtor
  constructor(private servico: CursosService) {}

  //Inicialização
  ngOnInit() {
    this.id = -1;
    this.curso = new Curso(this.nome, this.valor, this.area);
    this.vetorCursos = this.servico.listar();
  }

  //Cadastrar
  cadastrar() {
    this.servico.cadastrar(this.curso);
    this.curso = new Curso(this.nome, this.valor, this.area);
  }

  //Excluir
  excluir(id: number) {
    this.servico.excluir(id);
    this.id = -1;
  }

  //Alterar
  alterar(id: number) {
    this.id = id;
    this.curso = new Curso(
      this.vetorCursos[id].nome,
      this.vetorCursos[id].valor,
      this.vetorCursos[id].area
    );
  }

  //Atualizar
  atualizar() {
    this.servico.alterar(this.id, this.curso);
    this.curso = new Curso(this.nome, this.valor, this.area);
  }
}
