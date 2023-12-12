<div class="container products-wrapper">
<div class="row">
    <div class="col-12">
        <h2 class="products-title">Estás editando: <i></i></h2>
    </div>
</div>
<div class="col-12">
    <form action="/index" method="POST">
        <div class="row product-detail">
            <div class="">
                <label for="name" class="">Nombre del producto:</label>
                <input type="text" id="name" name="name" placeholder="Ej: Zapatillas Reebok" class="form-input"></input>
            </div>
            <div class="">
                <label for="price" class="">Precio del producto:</label>
                <input type="text" id="price" name="price" placeholder="Ej: 5678" class="form-input"></input>
            </div>
            <div class="">
                <label for="discount" class="">Descuento:</label>
                <input type="text" id="discount" name="discount" placeholder="Ej: 15" class="form-input"></input>
            </div>
            <div class="">
                <label for="category" class="">Categoría:</label>
                <select name="category" id="category" class="form-input">
                    <option value="">Elegí</option>
                    <option value="in-sale">En oferta</option>
                    <option value="visited" >Últimos agregados</option>
                </select>
            </div>
            <div class="">
                <label for="description" class="">Descipción:</label>
                <textarea name="description" id="description" class="form-input"> </textarea>
            </div>
            <div class="">
                <button type="submit" class="buy-now-button">Guardar producto</button>
            </div>
        </div>
    </form>
</div>

</div>