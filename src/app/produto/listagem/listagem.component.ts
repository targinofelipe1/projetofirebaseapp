import {Component, OnInit} from '@angular/core';
import { ProdutosFirebaseService } from 'src/shared/servico/produtos-firestore.service';
import {Produto} from '../../../shared/model/produto';
import {ProdutoService} from '../../../shared/servico/produto.service';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
    produtos: Produto[];

    constructor(private produtoService: ProdutosFirebaseService) {
        this.produtos = new Array<Produto>();
    }

    ngOnInit(): void {
        this.produtoService.listar().subscribe(
            (produtoRetornados) => (this.produtos = produtoRetornados)
        );
        console.log(this.produtos);
    }


}