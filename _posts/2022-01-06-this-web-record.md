---
title:  此网站施工纪要  
layout: post  
date:   2022-01-06 10:10:10  
categories: 编程    
tags: 编程 前端  
excerpt:
---



尝试在头部加入`daily`字段，效果不佳。在自带的`categories`里实现会更好。下标0存放的是key，下标1存放的是此`categories`的所有文章。

> 目前依然用`daily`字段

结构形如

```json
{
  "path": "_posts/2022-01-04-daily.html",
  "relative_path": "_posts/2022-01-04-daily.html",
  "collection": "posts",
  "output": null,
  "excerpt": "..",
  "content": "<h3 class=\"center-align\">我总是在重复做别人做过的事情</h3>\n<h4 class=\"center-align\">我注定没用</h4>\n\n",
  "url": "/2022/01/04/daily",
  "previous": {
    "id": "/2022/01/02/daily",
    "next": {
      "id": "/2022/01/04/daily",
      "path": "_posts/2022-01-04-daily.html",
      "relative_path": "_posts/2022-01-04-daily.html",
      "collection": "posts",
      "url": "/2022/01/04/daily",
      "draft": false,
      "categories": [
      ],
      "last_modified_at": "06-Jan-22",
      "title": "无用",
      "layout": "post",
      "date": "2022-01-04 22:33:33 +0800",
      "daily": 1,
      "slug": "daily",
      "ext": ".html",
      "tags": [
      ]
    },
    "path": "_posts/2022-01-01-daily.html",
    "relative_path": "_posts/2022-01-01-daily.html",
    "collection": "posts",
    "output": null,
    "excerpt": "..",
    "content": "<h3 class=\"center-align\">「拜拜」</h3>\n<h4 class=\"center-align\">20多年</h4>\n<h4 class=\"center-align\">恍如一瞬</h4>\n<h4 class=\"center-align\">什么都没习得</h4>\n<h4 class=\"center-align\">惟有失感</h4>\n\n",
    "url": "/2022/01/02/daily",
    "previous": {
      "id": "/2021/12/30/gitalk-access",
      "path": "_posts/2021-12-30-gitalk-access.md",
      "relative_path": "_posts/2021-12-30-gitalk-access.md",
      "collection": "posts",
      "url": "/2021/12/30/gitalk-access",
      "draft": false,
      "categories": [
        "编程"
      ],
      "last_modified_at": "30-Dec-21",
      "title": "gitalk评论接入教程",
      "layout": "post",
      "date": "2021-12-30 15:39:11 +0800",
      "tags": [
        "gitalk",
        "评论",
        "转载"
      ],
      "slug": "gitalk-access",
      "ext": ".md"
    },
    "draft": false,
    "categories": [
    ],
    "last_modified_at": "06-Jan-22",
    "title": "虚无",
    "layout": "post",
    "date": "2022-01-02 07:55:55 +0800",
    "daily": 1,
    "slug": "daily",
    "ext": ".html",
    "tags": [
    ]
  },
  "draft": false,
  "categories": [
  ],
  "last_modified_at": "06-Jan-22",
  "title": "无用",
  "layout": "post",
  "date": "2022-01-04 22:33:33 +0800",
  "daily": 1,
  "slug": "daily",
  "ext": ".html",
  "tags": [
  ]
}
```

