<#import "parts/commonP.ftlh" as c>
<#include "parts/securityP.ftlh">
<@c.page>
<#if isCurrentUser || isAdmin>
   <div class="collapse <#if message??>show</#if>">
      <div class="form-group mt-3">
         <form method="post" enctype="multipart/form-data">
            <div class="form-group">
               <input type="text" class="form-control border-dark ${(textError??)?string('is-invalid', '')}" value="<#if message??>${message.text}</#if>" name="text" placeholder="Введите сообщение" />
            </div>
            <#if textError??>
               <div class="invalid-feedback">
                  ${textError}
               </div>
            </#if>
            <div class="form-group">
               <input type="text" value="<#if message??>${message.tag}</#if>" class="form-control border-dark" name="tag" placeholder="Тэг">
            </div>
            <#if tagError??>
               <div class="invalid-feedback">
                  ${tagError}
               </div>
            </#if>
            <div class="form-group">
               <div class="custom-file">
                  <input type="file" name="file" id="customFile">
                  <label class="custom-file-label border-dark" for="customFile">Выбери файл</label>
               </div>
            </div>
            <input type="hidden" name="_csrf" value="${_csrf.token}" />
            <input type="hidden" name="id" value="<#if message??>${message.id}</#if>" />
            <div class="form-group">
               <button type="submit" class="btn btn-secondary">Отправить</button>
            </div>
         </form>
      </div>
   </div>
   <div class="card-columns">
      <#list messages as message>
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
            </form>
            </div>
         </div>
      <#else>
         Нет сообщений
      </#list>
   </div>
</#if>
</@c.page>