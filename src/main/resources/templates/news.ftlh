<#import "parts/commonP.ftlh" as c>
<#include "parts/securityP.ftlh">
<@c.page>
    <#if isAdmin || isStaff>
    <#include "parts/messageSender.ftlh">
    </#if>
    <div class="card-columns">
        <#list messages as message>
            <#if message.author.isStaff() || message.author.isAdmin()>
            <div class="card my-3">
                <form action="/user-messages/${message.author.id}/delete" method="post" enctype="multipart/form-data">
                    <#if message.filename??>
                        <img src="/static/img/${message.filename}" class="card-img-top">
                    </#if>
                    <div class="m-2">
                        <span>${message.text}</span><br/>
                        <i>#${message.tag}</i>
                    </div>
                <div class="card-footer text-muted">
                    <#if (message.author.id)??>
                        <div class="mb-2" >
                            <a href="/user-messages/${message.author.id}">${message.authorName}</a>
                        </div>
                        <#if message.author.id == currentUserId || isAdmin>
                            <div class="row">
                                <a class="col btn border-dark" href="/user-messages/${message.author.id}?message=${message.id}">Редактировать</a>
                                <input type="hidden" name="_csrf" value="${_csrf.token}" />
                                <input type="hidden" name="id" value="<#if message??>${message.id}</#if>" />
                                <input type="submit" class="col btn border-dark" value="Удалить"></input>
                            </div>
                        </#if>
                    <#else>
                        Хммм, Приведенье...
                    </#if>
                </form>
                </div>
            </div>
            </#if>
        <#else>
            Нет сообщений
        </#list>
        </form>
    </div>
</@c.page>