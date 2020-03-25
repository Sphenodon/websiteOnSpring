<#include "securityP.ftlh">
<#import "loginP.ftlh" as l>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
  <a class="navbar-brand" href="/">Project</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul class="navbar-nav justify-content-center">
      <#if known>
      <li class="nav-item">
        <a class="nav-link text-white" href="/news">Новости</a>
      </li>
      </#if>
      <#if known>
      <li class="nav-item">
        <a class="nav-link text-white" href="/main">Сообщения</a>
      </li>
      </#if>
      <#if user??>
        <li class="nav-item">
          <a class="nav-link text-white" href="/user-messages/${currentUserId}">Мои сообщения</a>
        </li>
      </#if>
      <#if isAdmin>
      <li class="nav-item">
        <a class="nav-link text-white" href="/user">Лист пользователей</a>
      </li>
      </#if>
      <#if known>
        <li class="nav-item">
        <a class="nav-link text-white" href="/puzzle">Пазл</a>
      </li>
      </#if>
      <#if known>
        <li class="nav-item">
          <a class="nav-link text-white" href="/clicker?id=${currentUserId}">Кликер</a>
        </li>
      </#if>
      <#if known>
        <li class="nav-item">
          <a class="nav-link text-white" href="/user/profile">Профиль</a>
        </li>
      </#if>
    </ul>
  </div>

  <div id="signOutIfMobile"><#if known><@l.logout /><#else><@l.signin/></#if></div>
  <div class="collapse" id="navbarSupportedContent"><#if known><@l.logout /><#else><@l.signin/></#if></div>
  <#if known??>
    <div class="navbar-text mr-3">${name}</div>
  </#if>
</nav>