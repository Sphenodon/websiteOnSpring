<#include "securityP.ftlh" />
<div class="card-columns">
    <#list messages as message>
        <div class="card my-3">
            <form action="/user-messages/${message.author.id}/delete" method="post" enctype="multipart/form-data">
                <#if message.filename??>
                    <img src="/static/img/${message.filename}" class="card-img-top">
                </#if>
                <div class="m-2">
                    <span>${message.text}</span><br/>
                    <#if message.puzzle_href?? && message.author.id != currentUserId>
                        <a href="/games?href=${message.puzzle_href}&difficult=${message.puzzle_difficult}" title="Собрать пазл"><i>#${message.tag}</i></a>
                    <#else>
                        <i>#${message.tag}</i>
                    </#if>
                </div>
                <div class="card-footer text-muted">
                    <#if (message.author.id)??>
                        <div class="mb-2" >
                            <a href="/user-messages/${message.author.id}">${message.authorName}</a>
                        </div>
                        <#if message.author.id == currentUserId || isAdmin>
                            <div class="row">
                                <#if message.author.id == currentUserId>
                                    <a class="col btn border-dark" href="/user-messages/${message.author.id}?message=${message.id}">Редактировать</a>
                                </#if>
                                <input type="hidden" name="_csrf" value="${_csrf.token}" />
                                <input type="hidden" name="id" value="<#if message??>${message.id}</#if>" />
                                <input type="submit" class="col btn border-dark" value="Удалить"></input>
                            </div>
                        </#if>
                    <#else>
                        Hmmm, Ghost...
                    </#if>
                </div>
            </form>
        </div>
    <#else>
        Нет сообщений
    </#list>
</div>