import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosFirebaseService } from 'src/shared/servico/produtos-firestore.service';
import { Produto } from '../../../shared/model/produto';
import { ProdutoService } from '../../../shared/servico/produto.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  produto: Produto;
  inserindo = true;
  constructor(private produtoService: ProdutosFirebaseService, private router: Router) {
    this.produto = new Produto();
  }

  ngOnInit(): void {}

  inserirProduto()  {
    if (this.inserindo) {
      this.produtoService
        .inserir(this.produto)
        .subscribe((produtoInserido) => console.log(produtoInserido));
      this.produto = new Produto();
    }
  }

  inicio(): void {
    console.log('Digitando');
  }
}
