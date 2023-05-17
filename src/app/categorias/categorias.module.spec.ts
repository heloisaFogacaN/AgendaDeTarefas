import { CategoriasComponent } from './categorias.component';

describe('CategoriaModule', () => {
  let categoriaModule: CategoriasComponent;

  beforeEach(() => {
    categoriaModule = new CategoriasComponent();
  });

  it('should create an instance', () => {
    expect(categoriaModule).toBeTruthy();
  });
});