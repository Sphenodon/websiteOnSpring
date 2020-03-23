<div class="form-row">
    <div class="form-group col-md-6">
        <form method="get" action="/main" class="form-inline">
            <input type="text" name="filter" class="form-control border-dark" value="${filter?ifExists}" placeholder="Искать по хэштэгу">
            <button type="submit" class="btn btn-secondary ml-2">Искать</button>
        </form>
    </div>
</div>

<a class="btn btn-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Написать сообщение
</a>

<div class="collapse <#if message??>show</#if>" id="collapseExample">
    <div class="form-group mt-3">
        <form method="post" enctype="multipart/form-data">
            <div class="form-group">
                <input type="text" class="form-control border-dark ${(textError??)?string('is-invalid', '')}" value="" name="text" placeholder="Введите сообщение" />
                <#if textError??>
                    <div class="invalid-feedback">
                        ${textError}
                    </div>
                </#if>
            </div>
            <div class="form-group">
                <input type="text" value="" class="form-control border-dark" name="tag" placeholder="Тэг">
                <#if tagError??>
                    <div class="invalid-feedback">
                        ${tagError}
                    </div>
                </#if>
            </div>
            <div class="form-group">
                <div class="custom-file">
                    <input type="file" name="file" id="customFile">
                    <label class="custom-file-label border-dark" for="customFile">Выбери файл</label>
                </div>
            </div>
            <input type="hidden" name="_csrf" value="${_csrf.token}" />
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Отправить</button>
            </div>
        </form>
    </div>
</div>