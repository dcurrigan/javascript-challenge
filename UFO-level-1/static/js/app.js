<!DOCTYPE html>
<html class="" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<link as="style" href="https://waustralia.bootcampcontent.com/assets/application-08858ced0ff83694fb12cf155f6d6bf450dcaae7192ea3de8383966993724290.css" rel="preload">
<link as="style" href="https://waustralia.bootcampcontent.com/assets/highlight/themes/white-aa4568025f9b4ea36b357bdccb95c9138a515f1e611b59f20a1777a68b6995db.css" rel="preload">

<meta content="IE=edge" http-equiv="X-UA-Compatible">

<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js · master · The University of Western Australia / WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C" property="og:title">
<meta content="GitLab Enterprise Edition" property="og:description">
<meta content="https://waustralia.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="og:image">
<meta content="64" property="og:image:width">
<meta content="64" property="og:image:height">
<meta content="https://waustralia.bootcampcontent.com/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js · master · The University of Western Australia / WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C" property="twitter:title">
<meta content="GitLab Enterprise Edition" property="twitter:description">
<meta content="https://waustralia.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="twitter:image">

<title>02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js · master · The University of Western Australia / WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C · GitLab</title>
<meta content="GitLab Enterprise Edition" name="description">
<link rel="shortcut icon" type="image/png" href="/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png" id="favicon" data-original-href="/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png" />

<link rel="stylesheet" media="all" href="/assets/application-08858ced0ff83694fb12cf155f6d6bf450dcaae7192ea3de8383966993724290.css" />

<link rel="stylesheet" media="all" href="/assets/application_utilities-753570944e7deb9f70dcaa57c9f92d06ebc295af72460c6770c4ccb2b49069a9.css" />
<link rel="stylesheet" media="all" href="/assets/themes/theme_indigo-190bf26ce6f97432bbca6d74618009b7eb07738094143cefed5cb9856d26f9e7.css" />

<link rel="stylesheet" media="all" href="/assets/highlight/themes/white-aa4568025f9b4ea36b357bdccb95c9138a515f1e611b59f20a1777a68b6995db.css" />


<script>
//<![CDATA[
window.gon={};gon.api_version="v4";gon.default_avatar_url="https://waustralia.bootcampcontent.com/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=10;gon.asset_host=null;gon.webpack_public_path="/assets/webpack/";gon.relative_url_root="";gon.shortcuts_path="/help/shortcuts";gon.user_color_scheme="white";gon.gitlab_url="https://waustralia.bootcampcontent.com";gon.revision="925686b2c52";gon.gitlab_logo="/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png";gon.sprite_icons="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg";gon.sprite_file_icons="/assets/file_icons-c13caf2f3ca00cc2c02b11d373ac288c200b9b4dcddbb52a5027dc07b3eece19.svg";gon.emoji_sprites_css_path="/assets/emoji_sprites-289eccffb1183c188b630297431be837765d9ff4aed6130cf738586fb307c170.css";gon.select2_css_path="/assets/lazy_bundles/select2-d322d554b93e447466e7c2f93a569ca5df559cbda65d1e558e810910a238d88a.css";gon.test_env=false;gon.disable_animations=null;gon.suggested_label_colors={"#0033CC":"UA blue","#428BCA":"Moderate blue","#44AD8E":"Lime green","#A8D695":"Feijoa","#5CB85C":"Slightly desaturated green","#69D100":"Bright green","#004E00":"Very dark lime green","#34495E":"Very dark desaturated blue","#7F8C8D":"Dark grayish cyan","#A295D6":"Slightly desaturated blue","#5843AD":"Dark moderate blue","#8E44AD":"Dark moderate violet","#FFECDB":"Very pale orange","#AD4363":"Dark moderate pink","#D10069":"Strong pink","#CC0033":"Strong red","#FF0000":"Pure red","#D9534F":"Soft red","#D1D100":"Strong yellow","#F0AD4E":"Soft orange","#AD8D43":"Dark moderate orange"};gon.first_day_of_week=0;gon.ee=true;gon.current_user_id=400;gon.current_username="DC";gon.current_user_fullname="Dale Currigan";gon.current_user_avatar_url="https://secure.gravatar.com/avatar/5299eca578f532dacd962508c8d13f97?s=80\u0026d=identicon";gon.features={"webperfExperiment":false,"snippetsBinaryBlob":false,"usageDataApi":true,"securityAutoFix":false,"startupCss":false};gon.roadmap_epics_limit=1000;
//]]>
</script>



<script src="/assets/webpack/runtime.9176025c.bundle.js" defer="defer"></script>
<script src="/assets/webpack/main.efa14ffb.chunk.js" defer="defer"></script>
<script src="/assets/webpack/commons-globalSearch-pages.admin.abuse_reports-pages.admin.application_settings.ci_cd-pages.admin.gr-a55ff0e9.c48f02ee.chunk.js" defer="defer"></script>
<script src="/assets/webpack/commons-pages.groups.boards-pages.groups.details-pages.groups.show-pages.groups.wikis-pages.projects-080a6466.e2a7352d.chunk.js" defer="defer"></script>
<script src="/assets/webpack/commons-pages.admin.application_settings-pages.admin.application_settings.ci_cd-pages.admin.applicat-43ba9593.bde8bf66.chunk.js" defer="defer"></script>
<script src="/assets/webpack/commons-pages.groups.epics.index-pages.groups.epics.new-pages.groups.epics.show-pages.groups.iterati-85c41ccb.f20b243c.chunk.js" defer="defer"></script>
<script src="/assets/webpack/commons-pages.projects.blame.show-pages.projects.blob.edit-pages.projects.blob.new-pages.projects.bl-c6edf1dd.7c30cc24.chunk.js" defer="defer"></script>
<script src="/assets/webpack/pages.projects.blob.show.125ebd89.chunk.js" defer="defer"></script>

<script>
//<![CDATA[
window.uploads_path = "/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/uploads";



//]]>
</script>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="+KTsiNXjwW3Ibcwuz91E4Pc9szlxDfbXWNXzr96PscVvhA1M4Qc/FpKeuOLiD3YqzrH0NDcVjvhdrPWMkpYa7g==" />
<meta name="csp-nonce" />
<meta name="action-cable-url" content="/-/cable" />
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
<meta content="#474D57" name="theme-color">
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-5a9cee0e8a51212e70b90c87c12f382c428870c0ff67d1eb034d884b78d2dae7.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-a6eec6aeb9da138e507593b464fdac213047e49d3093fc30e90d9a995df83ba3.png" sizes="76x76" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-retina-72e2aadf86513a56e050e7f0f2355deaa19cc17ed97bbe5147847f2748e5a3e3.png" sizes="120x120" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-retina-8ebe416f5313483d9c1bc772b5bbe03ecad52a54eba443e5215a22caed2a16a2.png" sizes="152x152" />
<link color="rgb(226, 67, 41)" href="/assets/logo-d36b5212042cebc89b96df4bf6ac24e43db316143e89926c0db839ff694d2de4.svg" rel="mask-icon">
<meta content="/assets/msapplication-tile-1196ec67452f618d39cdd85e2e3a542f76574c071051ae7effbfde01710eb17d.png" name="msapplication-TileImage">
<meta content="#30353E" name="msapplication-TileColor">




</head>

<body class="ui-indigo tab-width-8  gl-browser-chrome gl-platform-windows" data-find-file="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/find_file/master" data-group="the-university-of-western-australia" data-namespace-id="2" data-page="projects:blob:show" data-page-type-id="master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js" data-project="waus-perth-virt-data-pt-03-2021-u-c" data-project-id="70">

<script>
//<![CDATA[
gl = window.gl || {};
gl.client = {"isChrome":true,"isWindows":true};


//]]>
</script>


<header class="navbar navbar-gitlab navbar-expand-sm js-navbar" data-qa-selector="navbar">
<a class="sr-only gl-accessibility" href="#content-body" tabindex="1">Skip to content</a>
<div class="container-fluid">
<div class="header-content">
<div class="title-container">
<h1 class="title">
<span class="gl-sr-only">GitLab</span>
<a title="Dashboard" id="logo" href="/"><svg width="24" height="24" class="tanuki-logo" viewBox="0 0 36 36">
  <path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"/>
  <path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"/>
  <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"/>
  <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"/>
  <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"/>
  <path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"/>
  <path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"/>
</svg>

<span class="logo-text d-none d-lg-block gl-ml-3">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 617 169"><path d="M315.26 2.97h-21.8l.1 162.5h88.3v-20.1h-66.5l-.1-142.4M465.89 136.95c-5.5 5.7-14.6 11.4-27 11.4-16.6 0-23.3-8.2-23.3-18.9 0-16.1 11.2-23.8 35-23.8 4.5 0 11.7.5 15.4 1.2v30.1h-.1m-22.6-98.5c-17.6 0-33.8 6.2-46.4 16.7l7.7 13.4c8.9-5.2 19.8-10.4 35.5-10.4 17.9 0 25.8 9.2 25.8 24.6v7.9c-3.5-.7-10.7-1.2-15.1-1.2-38.2 0-57.6 13.4-57.6 41.4 0 25.1 15.4 37.7 38.7 37.7 15.7 0 30.8-7.2 36-18.9l4 15.9h15.4v-83.2c-.1-26.3-11.5-43.9-44-43.9M557.63 149.1c-8.2 0-15.4-1-20.8-3.5V70.5c7.4-6.2 16.6-10.7 28.3-10.7 21.1 0 29.2 14.9 29.2 39 0 34.2-13.1 50.3-36.7 50.3m9.2-110.6c-19.5 0-30 13.3-30 13.3v-21l-.1-27.8h-21.3l.1 158.5c10.7 4.5 25.3 6.9 41.2 6.9 40.7 0 60.3-26 60.3-70.9-.1-35.5-18.2-59-50.2-59M77.9 20.6c19.3 0 31.8 6.4 39.9 12.9l9.4-16.3C114.5 6 97.3 0 78.9 0 32.5 0 0 28.3 0 85.4c0 59.8 35.1 83.1 75.2 83.1 20.1 0 37.2-4.7 48.4-9.4l-.5-63.9V75.1H63.6v20.1h38l.5 48.5c-5 2.5-13.6 4.5-25.3 4.5-32.2 0-53.8-20.3-53.8-63-.1-43.5 22.2-64.6 54.9-64.6M231.43 2.95h-21.3l.1 27.3v94.3c0 26.3 11.4 43.9 43.9 43.9 4.5 0 8.9-.4 13.1-1.2v-19.1c-3.1.5-6.4.7-9.9.7-17.9 0-25.8-9.2-25.8-24.6v-65h35.7v-17.8h-35.7l-.1-38.5M155.96 165.47h21.3v-124h-21.3v124M155.96 24.37h21.3V3.07h-21.3v21.3"/></svg>

</span>
</a></h1>
<ul class="list-unstyled navbar-sub-nav">
<li id="nav-projects-dropdown" class="home dropdown header-projects qa-projects-dropdown" data-track-label="projects_dropdown" data-track-event="click_dropdown"><button data-toggle="dropdown" type="button">
Projects
<svg class="s16 caret-down" data-testid="chevron-down-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-down"></use></svg>
</button>
<div class="dropdown-menu frequent-items-dropdown-menu">
<div class="frequent-items-dropdown-container">
<div class="frequent-items-dropdown-sidebar qa-projects-dropdown-sidebar">
<ul>
<li class=""><a class="qa-your-projects-link" data-track-label="projects_dropdown_your_projects" data-track-event="click_link" href="/dashboard/projects">Your projects
</a></li><li class=""><a data-track-label="projects_dropdown_starred_projects" data-track-event="click_link" href="/dashboard/projects/starred">Starred projects
</a></li><li class=""><a data-track-label="projects_dropdown_explore_projects" data-track-event="click_link" href="/explore">Explore projects
</a></li></ul>
</div>
<div class="frequent-items-dropdown-content">
<div data-project-id="70" data-project-name="WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C" data-project-namespace="The University of Western Australia / WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C" data-project-web-url="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c" data-user-name="DC" id="js-projects-dropdown"></div>
</div>
</div>

</div>
</li><li id="nav-groups-dropdown" class="d-none d-md-block home dropdown header-groups qa-groups-dropdown" data-track-label="groups_dropdown" data-track-event="click_dropdown"><button data-toggle="dropdown" type="button">
Groups
<svg class="s16 caret-down" data-testid="chevron-down-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-down"></use></svg>
</button>
<div class="dropdown-menu frequent-items-dropdown-menu">
<div class="frequent-items-dropdown-container">
<div class="frequent-items-dropdown-sidebar qa-groups-dropdown-sidebar">
<ul>
<li class=""><a class="qa-your-groups-link" data-track-label="groups_dropdown_your_groups" data-track-event="click_link" href="/dashboard/groups">Your groups
</a></li><li class=""><a data-track-label="groups_dropdown_explore_groups" data-track-event="click_link" href="/explore/groups">Explore groups
</a></li></ul>
</div>
<div class="frequent-items-dropdown-content">
<div data-user-name="DC" id="js-groups-dropdown"></div>
</div>
</div>

</div>
</li><li id="nav-more-dropdown" class="header-more dropdown" data-track-label="more_dropdown" data-track-event="click_more_link"><a data-qa-selector="more_dropdown" data-toggle="dropdown" href="#">
More
<svg class="s16 caret-down" data-testid="chevron-down-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-down"></use></svg>
</a>
<div class="dropdown-menu">
<ul>
<li class="d-md-none">
<a class="dashboard-shortcuts-groups" data-qa-selector="groups_link" href="/dashboard/groups">Groups
</a></li>
<li class=""><a class="dashboard-shortcuts-activity" data-qa-selector="activity_link" href="/dashboard/activity">Activity
</a></li><li class=""><a class="dashboard-shortcuts-milestones" data-qa-selector="milestones_link" href="/dashboard/milestones">Milestones
</a></li><li class=""><a class="dashboard-shortcuts-snippets" data-qa-selector="snippets_link" href="/dashboard/snippets">Snippets
</a></li><li class="dropdown">

</li>
</ul>
</div>
</li><li class="hidden">
<a class="dashboard-shortcuts-projects" href="/dashboard/projects">Projects
</a></li>

</ul>

</div>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav">
<li class="header-new dropdown" data-track-event="click_dropdown" data-track-label="new_dropdown" data-track-value="">
<a class="header-new-dropdown-toggle has-tooltip qa-new-menu-toggle" id="js-onboarding-new-project-link" title="New..." ref="tooltip" aria-label="New..." data-toggle="dropdown" data-placement="bottom" data-container="body" data-display="static" href="/projects/new"><svg class="s16" data-testid="plus-square-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#plus-square"></use></svg>
<svg class="s16 caret-down" data-testid="chevron-down-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-down"></use></svg>
</a><div class="dropdown-menu dropdown-menu-right">
<ul>
<li class="dropdown-bold-header">
This project
</li>
<li><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/issues/new">New issue</a></li>
<li><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/merge_requests/new">New merge request</a></li>
<li><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/snippets/new">New snippet</a></li>
<li class="divider"></li>
<li class="dropdown-bold-header">GitLab</li>
<li><a class="qa-global-new-project-link" href="/projects/new">New project</a></li>
<li><a href="/groups/new">New group</a></li>
<li><a class="qa-global-new-snippet-link" href="/-/snippets/new">New snippet</a></li>
</ul>
</div>
</li>

<li class="nav-item d-none d-lg-block m-auto">
<div class="search search-form" data-track-event="activate_form_input" data-track-label="navbar_search" data-track-value="">
<form class="form-inline" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><div class="search-input-container">
<div class="search-input-wrap">
<div class="dropdown" data-url="/search/autocomplete">
<input type="search" name="search" id="search" placeholder="Search or jump to…" class="search-input dropdown-menu-toggle no-outline js-search-dashboard-options" spellcheck="false" autocomplete="off" data-issues-path="/dashboard/issues" data-mr-path="/dashboard/merge_requests" data-qa-selector="search_term_field" aria-label="Search or jump to…" />
<button class="hidden js-dropdown-search-toggle" data-toggle="dropdown" type="button"></button>
<div class="dropdown-menu dropdown-select" data-testid="dashboard-search-options">
<div class="dropdown-content"><ul>
<li class="dropdown-menu-empty-item">
<a>
Loading...
</a>
</li>
</ul>
</div><div class="dropdown-loading"><div class="gl-spinner-container"><span class="gl-spinner gl-spinner-orange gl-spinner-md gl-mt-7" aria-label="Loading"></span></div></div>
</div>
<svg class="s16 search-icon" data-testid="search-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#search"></use></svg>
<svg class="s16 clear-icon js-clear-input" data-testid="close-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#close"></use></svg>
</div>
</div>
</div>
<input type="hidden" name="group_id" id="group_id" value="2" class="js-search-group-options" data-group-path="the-university-of-western-australia" data-name="The University of Western Australia" data-issues-path="/groups/the-university-of-western-australia/-/issues" data-mr-path="/groups/the-university-of-western-australia/-/merge_requests" />
<input type="hidden" name="project_id" id="search_project_id" value="70" class="js-search-project-options" data-project-path="waus-perth-virt-data-pt-03-2021-u-c" data-name="WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C" data-issues-path="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/issues" data-mr-path="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/merge_requests" data-issues-disabled="false" />
<input type="hidden" name="scope" id="scope" />
<input type="hidden" name="search_code" id="search_code" value="true" />
<input type="hidden" name="snippets" id="snippets" value="false" />
<input type="hidden" name="repository_ref" id="repository_ref" value="master" />
<input type="hidden" name="nav_source" id="nav_source" value="navbar" />
<div class="search-autocomplete-opts hide" data-autocomplete-path="/search/autocomplete" data-autocomplete-project-id="70" data-autocomplete-project-ref="master"></div>
</form></div>

</li>
<li class="nav-item d-inline-block d-lg-none">
<a title="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search?project_id=70"><svg class="s16" data-testid="search-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#search"></use></svg>
</a></li>
<li class="user-counter"><a title="Issues" class="dashboard-shortcuts-issues" aria-label="Issues" data-qa-selector="issues_shortcut_button" data-toggle="tooltip" data-placement="bottom" data-track-label="main_navigation" data-track-event="click_issues_link" data-track-property="navigation" data-container="body" href="/dashboard/issues?assignee_username=DC"><svg class="s16" data-testid="issues-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#issues"></use></svg>
<span class="badge badge-pill green-badge hidden issues-count">
0
</span>
</a></li><li class="user-counter"><a title="Merge requests" class="dashboard-shortcuts-merge_requests" aria-label="Merge requests" data-qa-selector="merge_requests_shortcut_button" data-toggle="tooltip" data-placement="bottom" data-track-label="main_navigation" data-track-event="click_merge_link" data-track-property="navigation" data-container="body" href="/dashboard/merge_requests?assignee_username=DC"><svg class="s16" data-testid="git-merge-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#git-merge"></use></svg>
<span class="badge badge-pill hidden merge-requests-count">
0
</span>
</a></li><li class="user-counter"><a title="To-Do List" aria-label="To-Do List" class="shortcuts-todos" data-qa-selector="todos_shortcut_button" data-toggle="tooltip" data-placement="bottom" data-track-label="main_navigation" data-track-event="click_to_do_link" data-track-property="navigation" data-container="body" href="/dashboard/todos"><svg class="s16" data-testid="todo-done-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#todo-done"></use></svg>
<span class="badge badge-pill hidden js-todos-count todos-count">
0
</span>
</a></li><li class="nav-item header-help dropdown d-none d-md-block">
<a class="header-help-dropdown-toggle" data-toggle="dropdown" href="/help"><span class="gl-sr-only">
Help
</span>
<svg class="s16" data-testid="question-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#question"></use></svg>
<span class="notification-dot rounded-circle gl-absolute"></span>
<svg class="s16 caret-down" data-testid="chevron-down-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-down"></use></svg>
</a><div class="dropdown-menu dropdown-menu-right">
<ul>

<li>
<a href="/help">Help</a>
</li>
<li>
<a href="https://about.gitlab.com/getting-help/">Support</a>
</li>
<li>
<a target="_blank" class="text-nowrap" rel="noopener noreferrer" data-track-event="click_forum" data-track-property="question_menu" href="https://forum.gitlab.com/">Community forum</a>

</li>
<li>
<button class="js-shortcuts-modal-trigger" type="button">
Keyboard shortcuts
<span aria-hidden class="text-secondary float-right">?</span>
</button>
</li>
<li class="divider"></li>
<li>
<a href="https://about.gitlab.com/submit-feedback">Submit feedback</a>
</li>
<li>

</li>

</ul>

</div>
</li>
<li class="dropdown header-user js-nav-user-dropdown nav-item" data-qa-selector="user_menu" data-track-event="click_dropdown" data-track-label="profile_dropdown" data-track-value="">
<a class="header-user-dropdown-toggle" data-toggle="dropdown" href="/DC"><img width="23" height="23" class="header-user-avatar qa-user-avatar lazy" alt="Dale Currigan" data-src="https://secure.gravatar.com/avatar/5299eca578f532dacd962508c8d13f97?s=46&amp;d=identicon" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />

<svg class="s16 caret-down" data-testid="chevron-down-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-down"></use></svg>
</a><div class="dropdown-menu dropdown-menu-right">
<ul>
<li class="current-user">
<div class="user-name gl-font-weight-bold">
Dale Currigan
</div>
@DC
</li>
<li class="divider"></li>
<li>
<button class="btn menu-item js-set-status-modal-trigger" type="button">
Set status
</button>
</li>
<li>
<a class="profile-link" data-user="DC" href="/DC">Profile</a>
</li>
<li>
<a data-qa-selector="settings_link" href="/-/profile">Settings</a>
</li>


<li class="divider d-md-none"></li>
<li class="d-md-none">
<a href="/help">Help</a>
</li>
<li class="d-md-none">
<a href="https://about.gitlab.com/getting-help/">Support</a>
</li>
<li class="d-md-none">
<a target="_blank" class="text-nowrap" rel="noopener noreferrer" data-track-event="click_forum" data-track-property="question_menu" href="https://forum.gitlab.com/">Community forum</a>

</li>
<li class="d-md-none">
<a href="https://about.gitlab.com/submit-feedback">Submit feedback</a>
</li>
<li class="d-md-none">

</li>

<li class="divider"></li>
<li>
<a class="sign-out-link" data-qa-selector="sign_out_link" rel="nofollow" data-method="post" href="/users/sign_out">Sign out</a>
</li>
</ul>

</div>
</li>
</ul>
</div>
<button class="navbar-toggler d-block d-sm-none" type="button">
<span class="sr-only">Toggle navigation</span>
<svg class="s12 more-icon js-navbar-toggle-right" data-testid="ellipsis_h-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#ellipsis_h"></use></svg>
<svg class="s12 close-icon js-navbar-toggle-left" data-testid="close-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#close"></use></svg>
</button>
</div>
</div>
</header>
<div class="js-set-status-modal-wrapper" data-current-emoji="" data-current-message="" data-default-emoji="speech_balloon"></div>

<div class="layout-page page-with-contextual-sidebar">
<div class="nav-sidebar">
<div class="nav-sidebar-inner-scroll">
<div class="context-header">
<a title="WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c"><div class="avatar-container rect-avatar s40 project-avatar">
<div class="avatar s40 avatar-tile identicon bg1">W</div>
</div>
<div class="sidebar-context-title">
WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C
</div>
</a></div>
<ul class="sidebar-top-level-items qa-project-sidebar">
<li class="home"><a class="shortcuts-project rspec-project-link" data-qa-selector="project_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c"><div class="nav-icon-container">
<svg class="s16" data-testid="home-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#home"></use></svg>
</div>
<span class="nav-item-name">
Project overview
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c"><strong class="fly-out-top-item-name">
Project overview
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Project details" class="shortcuts-project" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c"><span>Details</span>
</a></li><li class=""><a title="Activity" class="shortcuts-project-activity" data-qa-selector="activity_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/activity"><span>Activity</span>
</a></li><li class=""><a title="Releases" class="shortcuts-project-releases" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/releases"><span>Releases</span>
</a></li></ul>
</li><li class="active"><a class="shortcuts-tree" data-qa-selector="repository_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/tree/master"><div class="nav-icon-container">
<svg class="s16" data-testid="doc-text-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#doc-text"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-repo-link">
Repository
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item active"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/tree/master"><strong class="fly-out-top-item-name">
Repository
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class="active"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/tree/master">Files
</a></li><li class=""><a id="js-onboarding-commits-link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/commits/master">Commits
</a></li><li class=""><a data-qa-selector="branches_link" id="js-onboarding-branches-link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/branches">Branches
</a></li><li class=""><a data-qa-selector="tags_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/tags">Tags
</a></li><li class=""><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/graphs/master">Contributors
</a></li><li class=""><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/network/master">Graph
</a></li><li class=""><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/compare?from=master&amp;to=master">Compare
</a></li>
</ul>
</li><li class=""><a class="shortcuts-issues qa-issues-item" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/issues"><div class="nav-icon-container">
<svg class="s16" data-testid="issues-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#issues"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-issues-link">
Issues
</span>
<span class="badge badge-pill count issue_counter">
0
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/issues"><strong class="fly-out-top-item-name">
Issues
</strong>
<span class="badge badge-pill count issue_counter fly-out-badge">
0
</span>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Issues" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/issues"><span>
List
</span>
</a></li><li class=""><a title="Boards" data-qa-selector="issue_boards_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/boards"><span>
Boards
</span>
</a></li><li class=""><a title="Labels" class="qa-labels-link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/labels"><span>
Labels
</span>
</a></li><li class=""><a title="Service Desk" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/issues/service_desk">Service Desk
</a></li>
<li class=""><a title="Milestones" class="qa-milestones-link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/milestones"><span>
Milestones
</span>
</a></li>
</ul>
</li><li class=""><a class="shortcuts-merge_requests" data-qa-selector="merge_requests_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/merge_requests"><div class="nav-icon-container">
<svg class="s16" data-testid="git-merge-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#git-merge"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-mr-link">
Merge Requests
</span>
<span class="badge badge-pill count merge_counter js-merge-counter">
0
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/merge_requests"><strong class="fly-out-top-item-name">
Merge Requests
</strong>
<span class="badge badge-pill count merge_counter js-merge-counter fly-out-badge">
0
</span>
</a></li></ul>
</li>
<li class=""><a class="shortcuts-pipelines qa-link-pipelines rspec-link-pipelines" data-qa-selector="ci_cd_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/pipelines"><div class="nav-icon-container">
<svg class="s16" data-testid="rocket-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#rocket"></use></svg>
</div>
<span class="nav-item-name" id="js-onboarding-pipelines-link">
CI / CD
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/pipelines"><strong class="fly-out-top-item-name">
CI / CD
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/pipelines"><span>
Pipelines
</span>
</a></li><li class=""><a title="Jobs" class="shortcuts-builds" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/jobs"><span>
Jobs
</span>
</a></li><li class=""><a title="Schedules" class="shortcuts-builds" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/pipeline_schedules"><span>
Schedules
</span>
</a></li>
</ul>
</li><li class=""><a data-qa-selector="audit_events_settings_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/audit_events"><div class="nav-icon-container">
<svg class="s16" data-testid="shield-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#shield"></use></svg>
</div>
<span class="nav-item-name">
Security &amp; Compliance
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/audit_events"><strong class="fly-out-top-item-name">
Security &amp; Compliance
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Audit Events" data-qa-selector="audit_events_settings_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/audit_events"><span>Audit Events</span>
</a></li></ul>
</li>
<li class=""><a class="shortcuts-operations" data-qa-selector="operations_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/environments/metrics"><div class="nav-icon-container">
<svg class="s16" data-testid="cloud-gear-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#cloud-gear"></use></svg>
</div>
<span class="nav-item-name">
Operations
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/environments/metrics"><strong class="fly-out-top-item-name">
Operations
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Metrics" class="shortcuts-metrics" data-qa-selector="operations_metrics_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/metrics"><span>
Metrics
</span>
</a></li><li class=""><a title="Logs" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/logs"><span>
Logs
</span>
</a></li>
<li class=""><a title="Error Tracking" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/error_tracking"><span>
Error Tracking
</span>
</a></li><li class=""><a title="Alerts" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/alert_management"><span>
Alerts
</span>
</a></li><li class=""><a title="Incidents" data-qa-selector="operations_incidents_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/incidents"><span>
Incidents
</span>
</a></li>
<li class=""><a title="Terraform" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/terraform"><span>
Terraform
</span>
</a></li><li class=""><a title="Environments" class="shortcuts-environments qa-operations-environments-link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/environments"><span>
Environments
</span>
</a></li><li class=""><a title="Feature Flags" class="shortcuts-feature-flags" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/feature_flags"><span>
Feature Flags
</span>
</a></li></ul>
</li><li class=""><a data-qa-selector="packages_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/packages"><div class="nav-icon-container">
<svg class="s16" data-testid="package-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#package"></use></svg>
</div>
<span class="nav-item-name">
Packages &amp; Registries
</span>
</a><ul class="sidebar-sub-level-items">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/packages"><strong class="fly-out-top-item-name">
Packages &amp; Registries
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="Package Registry" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/packages"><span>Package Registry</span>
</a></li><li class=""><a class="shortcuts-container-registry" title="Container Registry" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/container_registry"><span>Container Registry</span>
</a></li></ul>
</li>
<li class=""><a class="shortcuts-analytics" data-qa-selector="analytics_anchor" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/value_stream_analytics"><div class="nav-icon-container">
<svg class="s16" data-testid="chart-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chart"></use></svg>
</div>
<span class="nav-item-name" data-qa-selector="analytics_link">
Analytics
</span>
</a><ul class="sidebar-sub-level-items" data-qa-selector="analytics_sidebar_submenu">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/value_stream_analytics"><strong class="fly-out-top-item-name">
Analytics
</strong>
</a></li><li class="divider fly-out-top-item"></li>
<li class=""><a title="CI / CD" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/pipelines/charts"><span>CI / CD</span>
</a></li><li class=""><a class="shortcuts-repository-charts" title="Repository" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/graphs/master/charts"><span>Repository</span>
</a></li><li class=""><a class="shortcuts-project-cycle-analytics" title="Value Stream" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/value_stream_analytics"><span>Value Stream</span>
</a></li></ul>
</li>
<li class=""><a class="shortcuts-wiki" data-qa-selector="wiki_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/wikis/home"><div class="nav-icon-container">
<svg class="s16" data-testid="book-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#book"></use></svg>
</div>
<span class="nav-item-name">
Wiki
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/wikis/home"><strong class="fly-out-top-item-name">
Wiki
</strong>
</a></li></ul>
</li>
<li class=""><a class="shortcuts-snippets" data-qa-selector="snippets_link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/snippets"><div class="nav-icon-container">
<svg class="s16" data-testid="snippet-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#snippet"></use></svg>
</div>
<span class="nav-item-name">
Snippets
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/snippets"><strong class="fly-out-top-item-name">
Snippets
</strong>
</a></li></ul>
</li><li class=""><a title="Members" class="qa-members-link" id="js-onboarding-members-link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/project_members"><div class="nav-icon-container">
<svg class="s16" data-testid="users-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#users"></use></svg>
</div>
<span class="nav-item-name">
Members
</span>
</a><ul class="sidebar-sub-level-items is-fly-out-only">
<li class="fly-out-top-item"><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/project_members"><strong class="fly-out-top-item-name">
Members
</strong>
</a></li></ul>
</li>
<a class="toggle-sidebar-button js-toggle-sidebar qa-toggle-sidebar rspec-toggle-sidebar" role="button" title="Toggle sidebar" type="button">
<svg class="s16 icon-chevron-double-lg-left" data-testid="chevron-double-lg-left-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-double-lg-left"></use></svg>
<svg class="s16 icon-chevron-double-lg-right" data-testid="chevron-double-lg-right-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-double-lg-right"></use></svg>
<span class="collapse-text">Collapse sidebar</span>
</a>
<button name="button" type="button" class="close-nav-button"><svg class="s16" data-testid="close-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#close"></use></svg>
<span class="collapse-text">Close sidebar</span>
</button>
<li class="hidden">
<a title="Activity" class="shortcuts-project-activity" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/activity"><span>
Activity
</span>
</a></li>
<li class="hidden">
<a title="Network" class="shortcuts-network" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/network/master">Graph
</a></li>
<li class="hidden">
<a class="shortcuts-new-issue" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/issues/new">Create a new issue
</a></li>
<li class="hidden">
<a title="Jobs" class="shortcuts-builds" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/jobs">Jobs
</a></li>
<li class="hidden">
<a title="Commits" class="shortcuts-commits" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/commits/master">Commits
</a></li>
<li class="hidden">
<a title="Issue Boards" class="shortcuts-issue-boards" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/boards">Issue Boards</a>
</li>
</ul>
</div>
</div>

<div class="content-wrapper">
<div class="mobile-overlay"></div>

<div class="alert-wrapper gl-force-block-formatting-context">















<nav class="breadcrumbs container-fluid container-limited" role="navigation">
<div class="breadcrumbs-container">
<button name="button" type="button" class="toggle-mobile-nav"><span class="sr-only">Open sidebar</span>
<svg class="s16" data-testid="hamburger-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#hamburger"></use></svg>
</button><div class="breadcrumbs-links js-title-container" data-qa-selector="breadcrumb_links_content">
<ul class="list-unstyled breadcrumbs-list js-breadcrumbs-list">
<li><a class="group-path breadcrumb-item-text js-breadcrumb-item-text " href="/the-university-of-western-australia">The University of Western Australia</a><svg class="s8 breadcrumbs-list-angle" data-testid="angle-right-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#angle-right"></use></svg></li> <li><a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c"><span class="breadcrumb-item-text js-breadcrumb-item-text">WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C</span></a><svg class="s8 breadcrumbs-list-angle" data-testid="angle-right-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#angle-right"></use></svg></li>

<li>
<h2 class="breadcrumbs-sub-title">
<a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js">Repository</a>
</h2>
</li>
</ul>
</div>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"The University of Western Australia","item":"https://waustralia.bootcampcontent.com/the-university-of-western-australia"},{"@type":"ListItem","position":2,"name":"WAUS-PERTH-VIRT-DATA-PT-03-2021-U-C","item":"https://waustralia.bootcampcontent.com/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c"},{"@type":"ListItem","position":3,"name":"Repository","item":"https://waustralia.bootcampcontent.com/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js"}]}

</script>

</div>
</nav>

</div>
<div class="container-fluid container-limited ">
<div class="content" id="content-body" itemscope itemtype="http://schema.org/SoftwareSourceCode">
<div class="flash-container flash-container-page sticky" data-qa-selector="flash_container">
</div>

<div class="js-signature-container" data-signatures-path="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/commits/b50ab1a5f6e75f4e61a451053637536793cefd9b/signatures?limit=1"></div>

<div class="tree-holder" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-container">
<div class="tree-ref-holder">
<form class="project-refs-form" action="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="destination" id="destination" value="blob" />
<input type="hidden" name="path" id="path" value="02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js" />
<div class="dropdown">
<button class="dropdown-menu-toggle js-project-refs-dropdown qa-branches-select" type="button" data-toggle="dropdown" data-selected="master" data-ref="master" data-refs-url="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/refs?sort=updated_desc" data-field-name="ref" data-submit-form-on-click="true" data-visit="true"><span class="dropdown-toggle-text ">master</span><svg class="s16 dropdown-menu-toggle-icon gl-top-3" data-testid="chevron-down-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#chevron-down"></use></svg></button>
<div class="dropdown-menu dropdown-menu-paging dropdown-menu-selectable git-revision-dropdown qa-branches-dropdown">
<div class="dropdown-page-one">
<div class="dropdown-title gl-display-flex"><span class="gl-ml-auto">Switch branch/tag</span><button class="dropdown-title-button dropdown-menu-close gl-ml-auto" aria-label="Close" type="button"><svg class="s16 dropdown-menu-close-icon" data-testid="close-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#close"></use></svg></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field qa-dropdown-input-field" placeholder="Search branches and tags" autocomplete="off" /><svg class="s16 dropdown-input-search" data-testid="search-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#search"></use></svg><svg class="s16 dropdown-input-clear js-dropdown-input-clear" data-testid="close-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#close"></use></svg></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><div class="gl-spinner-container"><span class="gl-spinner gl-spinner-orange gl-spinner-md gl-mt-7" aria-label="Loading"></span></div></div>
</div>
</div>
</div>
</form>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li class="breadcrumb-item">
<a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/tree/master">waus-perth-virt-data-pt-03-2021-u-c
</a></li>
<li class="breadcrumb-item">
<a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/tree/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static">..</a>
</li>
<li class="breadcrumb-item">
<a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/tree/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js">js</a>
</li>
<li class="breadcrumb-item">
<a href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js"><strong>app.js</strong>
</a></li>
</ul>
</div>
<div class="tree-controls gl-children-ml-sm-3"><a class="gl-button btn shortcuts-find-file" rel="nofollow" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/find_file/master">Find file
</a><a class="gl-button btn js-blob-blame-link" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blame/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js">Blame</a><a class="gl-button btn" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/commits/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js">History</a><a class="gl-button btn js-data-file-blob-permalink-url" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/b50ab1a5f6e75f4e61a451053637536793cefd9b/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js">Permalink</a></div>
</div>

<div class="info-well d-none d-sm-block">
<div class="well-segment">
<ul class="blob-commit-info">
<li class="commit flex-row js-toggle-container" id="commit-b50ab1a5">
<div class="avatar-cell d-none d-sm-block">
<a href="mailto:AmyElder@taskgeo.local"><img alt="Amy Elder&#39;s avatar" src="https://secure.gravatar.com/avatar/b70fe5d7e70a23230f0e1b3879f34e9d?s=80&amp;d=identicon" class="avatar s40 d-none d-sm-inline-block" title="Amy Elder" /></a>
</div>
<div class="commit-detail flex-list">
<div class="commit-content" data-qa-selector="commit_content">
<a class="commit-row-message item-title js-onboarding-commit-item " href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/commit/b50ab1a5f6e75f4e61a451053637536793cefd9b">Java HW instructions</a>
<span class="commit-row-message d-inline d-sm-none">
&middot;
b50ab1a5
</span>
<div class="committer">
<a class="commit-author-link" href="mailto:AmyElder@taskgeo.local">Amy Elder</a> authored <time class="js-timeago" title="Jun 11, 2021 12:53am" datetime="2021-06-11T00:53:26Z" data-toggle="tooltip" data-placement="bottom" data-container="body">Jun 11, 2021</time>
</div>

</div>
<div class="commit-actions flex-row">

<div class="js-commit-pipeline-status" data-endpoint="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/commit/b50ab1a5f6e75f4e61a451053637536793cefd9b/pipelines?ref=master"></div>
<div class="commit-sha-group btn-group d-none d-sm-flex">
<div class="label label-monospace monospace">
b50ab1a5
</div>
<button class="btn gl-button btn btn-default" data-toggle="tooltip" data-placement="bottom" data-container="body" data-title="Copy commit SHA" data-class="gl-button btn btn-default" data-clipboard-text="b50ab1a5f6e75f4e61a451053637536793cefd9b" type="button" title="Copy commit SHA" aria-label="Copy commit SHA"><svg class="s16" data-testid="copy-to-clipboard-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#copy-to-clipboard"></use></svg></button>

</div>
</div>
</div>
</li>

</ul>
</div>


</div>
<div class="blob-content-holder" id="blob-content-holder">
<article class="file-holder">
<div class="js-file-title file-title-flex-parent">
<div class="file-header-content">
<svg class="s16" data-testid="doc-text-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#doc-text"></use></svg>
<strong class="file-title-name gl-word-break-all" data-qa-selector="file_name_content">
app.js
</strong>
<button class="btn btn-clipboard btn-transparent" data-toggle="tooltip" data-placement="bottom" data-container="body" data-class="btn-clipboard btn-transparent" data-title="Copy file path" data-clipboard-text="{&quot;text&quot;:&quot;02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js&quot;,&quot;gfm&quot;:&quot;`02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js`&quot;}" type="button" title="Copy file path" aria-label="Copy file path"><svg class="s16" data-testid="copy-to-clipboard-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#copy-to-clipboard"></use></svg></button>
<small class="mr-1">
58 Bytes
</small>
</div>

<div class="file-actions gl-display-flex gl-flex-fill-1 gl-align-self-start gl-md-justify-content-end"><a class="btn btn-primary js-edit-blob gl-mr-3  btn-sm" data-track-event="click_edit" data-track-label="Edit" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/edit/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js">Edit</a><a class="btn btn-primary ide-edit-button gl-mr-3 btn-inverted btn-sm" data-track-event="click_edit_ide" data-track-label="Web IDE" data-track-property="secondary" href="/-/ide/project/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/edit/master/-/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js">Web IDE</a><div class="btn-group ml-2" role="group">


<button name="button" type="submit" class="btn btn-default" data-target="#modal-upload-blob" data-toggle="modal">Replace</button>
<button name="button" type="submit" class="btn btn-default" data-target="#modal-remove-blob" data-toggle="modal">Delete</button>
</div><div class="btn-group ml-2" role="group">
<button class="btn btn btn-sm js-copy-blob-source-btn" data-toggle="tooltip" data-placement="bottom" data-container="body" data-class="btn btn-sm js-copy-blob-source-btn" data-title="Copy file contents" data-clipboard-target=".blob-content[data-blob-id=&#39;cb8dae4bb300afb6474d58af0a81f76e3ffb5638&#39;] &gt; pre" type="button" title="Copy file contents" aria-label="Copy file contents"><svg class="s16" data-testid="copy-to-clipboard-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#copy-to-clipboard"></use></svg></button>
<a class="btn btn-sm has-tooltip" target="_blank" rel="noopener noreferrer" aria-label="Open raw" title="Open raw" data-container="body" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/raw/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js"><svg class="s16" data-testid="doc-code-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#doc-code"></use></svg></a>
<a download="02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js" class="btn btn-sm has-tooltip" target="_blank" rel="noopener noreferrer" aria-label="Download" title="Download" data-container="body" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/raw/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js?inline=false"><svg class="s16" data-testid="download-icon"><use xlink:href="/assets/icons-15cbe21ccc2237b075efb0b0d170fc8d6716882dbe4fefad34c18b914dbcf811.svg#download"></use></svg></a>

</div></div>
</div>
<div class="js-file-fork-suggestion-section file-fork-suggestion hidden">
<span class="file-fork-suggestion-note">
You're not allowed to
<span class="js-file-fork-suggestion-section-action">
edit
</span>
files in this project directly. Please fork this project,
make your changes there, and submit a merge request.
</span>
<a class="js-fork-suggestion-button gl-button btn btn-grouped btn-inverted btn-success" rel="nofollow" data-method="post" href="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js">Fork</a>
<button class="js-cancel-fork-suggestion-button gl-button btn btn-grouped" type="button">
Cancel
</button>
</div>



<div class="blob-viewer" data-path="02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js" data-type="simple" data-url="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js?format=json&amp;viewer=simple">
<div class="text-center gl-mt-4 gl-mb-3">
<span class="gl-spinner gl-spinner-orange gl-spinner-md qa-spinner" aria-label="Loading"></span>
</div>

</div>


</article>
</div>

<div class="modal" id="modal-remove-blob">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h3 class="page-title">Delete app.js</h3>
<button aria-label="Close" class="close" data-dismiss="modal" type="button">
<span aria-hidden>&times;</span>
</button>
</div>
<div class="modal-body">
<form class="js-delete-blob-form js-quick-submit js-requires-input" action="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/blob/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="QlopXXnCopBrriwSj4+5g6hYrt11lc7ucUpd6Z5HM/bVesiZTSZc6zFdWN6iXYtJkdTp0DONtsF0M1vK0l6Y3Q==" /><div class="form-group row commit_message-group">
<label class="col-form-label col-sm-2" for="commit_message-54176f9a74694b2ac9367285b86776f1">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-54176f9a74694b2ac9367285b86776f1" class="form-control js-commit-message" placeholder="Delete app.js" required="required" rows="3">
Delete app.js</textarea>
</div>
</div>
</div>

<div class="form-group row branch">
<label class="col-form-label col-sm-2" for="branch_name">Target Branch</label>
<div class="col-sm-10">
<input type="text" name="branch_name" id="branch_name" value="DC-master-patch-77006" required="required" class="form-control js-branch-name ref-name" />
<div class="js-create-merge-request-container">
<div class="form-check gl-mt-3">
<input type="checkbox" name="create_merge_request" id="create_merge_request-6b22b2d18131c0d02fa8c68a7ccd407d" value="1" class="js-create-merge-request form-check-input" checked="checked" />
<label class="form-check-label" for="create_merge_request-6b22b2d18131c0d02fa8c68a7ccd407d">Start a <strong>new merge request</strong> with these changes
</label></div>

</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-group row">
<div class="offset-sm-2 col-sm-10">
<button name="button" type="submit" class="btn gl-button btn-danger btn-remove-file">Delete file</button>
<a class="btn gl-button btn-cancel" data-dismiss="modal" href="#">Cancel</a>
</div>
</div>
</form></div>
</div>
</div>
</div>

<div class="modal" id="modal-upload-blob">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-header">
<h3 class="page-title">Replace app.js</h3>
<button aria-label="Close" class="close" data-dismiss="modal" type="button">
<span aria-hidden>&times;</span>
</button>
</div>
<div class="modal-body">
<form class="js-quick-submit js-upload-blob-form" data-method="put" action="/the-university-of-western-australia/waus-perth-virt-data-pt-03-2021-u-c/-/update/master/02-Homework/14-Intro-To-JavaScript/Instructions/StarterCode/static/js/app.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="gOTIqn89Hm6teH1op5usYWax2hOSo9AibJ1MdyZKoDwXxCluS9ngFfeLCaSKSZ6rXz2dHtS7qA1p5EpUalMLFw==" /><div class="dropzone">
<div class="dropzone-previews blob-upload-dropzone-previews">
<p class="dz-message light">
Attach a file by drag &amp; drop or <a class="markdown-selector" href="#">click to upload</a>
</p>
</div>
</div>
<br>
<div class="dropzone-alerts gl-alert gl-alert-danger gl-mb-5 data" style="display:none"></div>
<div class="form-group row commit_message-group">
<label class="col-form-label col-sm-2" for="commit_message-d170466ef386c2a7af61d97ac62e3917">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-d170466ef386c2a7af61d97ac62e3917" class="form-control js-commit-message" placeholder="Replace app.js" required="required" rows="3">
Replace app.js</textarea>
</div>
</div>
</div>

<div class="form-group row branch">
<label class="col-form-label col-sm-2" for="branch_name">Target Branch</label>
<div class="col-sm-10">
<input type="text" name="branch_name" id="branch_name" value="DC-master-patch-77008" required="required" class="form-control js-branch-name ref-name" />
<div class="js-create-merge-request-container">
<div class="form-check gl-mt-3">
<input type="checkbox" name="create_merge_request" id="create_merge_request-c0888373df2f49d13445046a365a1c4d" value="1" class="js-create-merge-request form-check-input" checked="checked" />
<label class="form-check-label" for="create_merge_request-c0888373df2f49d13445046a365a1c4d">Start a <strong>new merge request</strong> with these changes
</label></div>

</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-actions">
<button name="button" type="button" class="btn gl-button btn-success btn-upload-file" id="submit-all"><div class="spinner spinner-sm gl-mr-2 js-loading-icon hidden"></div>
Replace file
</button><a class="btn gl-button btn-cancel" data-dismiss="modal" href="#">Cancel</a>

</div>
</form></div>
</div>
</div>
</div>

</div>


</div>
</div>
</div>
</div>


<script>
//<![CDATA[
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img.lazy').forEach(img => {
    img.loading = 'lazy';
    let imgUrl = img.dataset.src;
    // Only adding width + height for avatars for now
    if (imgUrl.indexOf('/avatar/') > -1 && imgUrl.indexOf('?') === -1) {
      const targetWidth = img.getAttribute('width') || img.width;
      imgUrl += `?width=${targetWidth}`;
    }
    img.src = imgUrl;
    img.removeAttribute('data-src');
    img.classList.remove('lazy');
    img.classList.add('js-lazy-loaded', 'qa-js-lazy-loaded');
  });
}

//]]>
</script>

</body>
</html>
