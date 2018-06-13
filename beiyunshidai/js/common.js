

  var indexHtml=new function(){
    this.tdMove=function(ele){    //就业信息 内容部分的滚动
      var item=ele.find($('.td-item'));
      var timer;
      var flag=true;
      timer=setInterval(startMove,3000);
      function startMove(){
        if(flag){
          item.animate({'top':'-30px'},700);
          flag=!flag;
        }else{
          item.animate({'top':'0'},700);
          flag=!flag;
        }
      }
    };
    this.changebg=function(ele){   //导航条 和就业信息的 背景切换
      var col=new Array(6) ;
        col[0]="#145bb5";
        col[1]="#0966cc1";
        col[2]="#885bb5";
        col[3]="#0b573b";
        col[4]="#528d06";
        col[5]="#850cbe";
      var t=0;
      function changebgc(){
          var rand=Math.floor(Math.random()*6);
          ele.css('background-color',col[rand]);
          t++;
          if(t==6){t=0}
      }
      setInterval(changebgc,500);
    };
    this.slider=function(){   //环境展示的图片滚动
      //tomove
         var img=document.getElementById("img-boxL");
         var j=0;
         var len=img.getElementsByTagName('img').length-3;
         //alert(len)
         var timer=null;
         function toM(){
             if(j<len){ startMove(img,{left:-310*j});
                 j++;}
             else{
                 startMove(img,{left:310*j});
                 j--;
             }
             if(j==len){j=0}
             timer=setTimeout(toM,4000)
         }
         toM();
      };
      this.bannerLoop=function(){
          var i = 1;
          function loop() {
              $('.loop').find('img').fadeOut(500,function(){
                  $(this).attr({'src':'images/banner'+i+'.jpg'})
              }).fadeIn(500);
              i++;
              if(i>2) i=1;
              setTimeout(loop,3000);
          }
          loop();
      }
  };
  indexHtml.changebg($('#nav'));



  var h5Html=new function(){
    this.dagangBg=function(){
      var flag;
      $('.text-item').mouseenter(function(){
        var cur1='text-item-current1'
        var cur2='text-item-current2';
        var ind=$(this).index();

        var dataItem=$('.data-item');
        
        if($(this).parent().hasClass('text-box-t')){
          $('.text-box .text-item').removeClass(cur1).removeClass(cur2);
          $(this).addClass('text-item-current1');
          dataItem.addClass('none');
          dataItem.eq(ind).removeClass('none');
        }else{
          $('.text-box .text-item').removeClass(cur1).removeClass(cur2);
          $(this).addClass('text-item-current2');
          dataItem.addClass('none');
          dataItem.eq(ind+6.).removeClass('none');
        }
        return false;
      });
    }
  };
  

  var javaHtml=new function(){
    this.kezuo=function(){    // 课程大纲 特效
      var t=[
        ['面向对象思维','类加载机制与反射，annotation，泛型，网络编程，多线程，IO，异常处理，常用API，面向对象，JAVA编程基础。'],
        ['数据库各类应用系统','Oracle（SQL语句、SQL语句原理、SQL语句优化、表、视图、序列、索引、Oracle数据字典、oracle数据库PL/SQL开发、数据库设计原则）MySQL、JDBC。'],
        ['Web开发基础','HTML5（H5）基本文档结构、链接、列表、表格、表单；css基础语法、盒子模型、浮动布局、定位；JavaScript语言基础、DOM编程、事件模型等；JQuery、Ajax框架，XML，BootStrap组件'],
        ['Java Web技术和主流框架','JSP&Servlet、struts2、hibernate4、spring4、JPA、maven、SpringData、SpringMVC、MyBatis、SpringSecurity、shiro、Nginx'],
        ['Linux','Linux安装、熟悉Linux命令、vi编辑器使用、awk和sed命令使用、用户和组、文件及目录权限管理、使用ACL进行高级访问控制、网络配置和软件包装、启动流程和服务管理、系统监控和日志管理、进程管理和计划任务、ssh远程登录、shell基础额shell脚本'],
        ['大数据技术Hadoop和Spark','Hadoop基础和环境搭建，HDFS体系结构，MapReduce；Hadoop的集群模式、HDFS联盟，利用ZooKeeper来实现Hadoop集群的HA功能，Yarn的任务调度机制，Apache Hive，Pig数据处理，集成Hadoop和Sqoop、Flume以及Apache Kafka来实现数据的交换，安装部署HBase，Storm；、Scala语言的环境搭建、基础语法、模式匹配、重载和构造器、Map与reduce、元组、继承、StringContext，Option Some None，Tuple；集合方法和运算，future对象同步处理和异步处理返回结果；Spark的搭建、使用、内核设计和实现，并队内核中的实现架构、运行原进行详细的讲解；Spark生态体系中的各个组件，包括Spark Core、Shark、Spark SQL和Spark Streaming等等。'],
        ['项目','<strong>项目一：民航项目</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  SSM(Spring+SpringMVC+MyBatis) <br/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  <strong>项目二：ERP管理系统</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;   S2SH+Haven+NodeJS+MySQL技术实战开发 <br/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    <strong>项目三：电子商务交易平台</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;   S2S+Maven+Shiro+Oracle']
      ];
      var box=$('.kecheng-content');
      var h5=box.find('h5');
      var p=box.find('p');
      
      h5.html(t[0][0]);
      p.html(t[0][1]);

      $('.kecheng-nav').find('td').mouseenter(function(){
        $(this).addClass('td-current').siblings().removeClass('td-current');
        var ind=$(this).index();
        h5.html(t[ind][0]);
        p.html(t[ind][1]);
      })
    }
  };

  var uiHtml=new function(){
    this.whyUi=function(){
        $('.why-title-item').mouseover(
            function(){
                var imgInd=$(this).index()+1;

                $(this).find('p').stop().animate({'top':'60px'},200,function(){
                    $(this).css({'background-image':'url(images/ui/bg07.png)','color':'#013a46'});
                    $('.why-content').find('img').attr('src','images/ui/why'+imgInd+'.jpg');
                });
                $(this).siblings().find('p').stop().animate({'top':0},200,function(){
                    $(this).css({'background-image':'url(images/ui/bg06.png)','color':'#fff'});
                    /*$('.why-content').find('img').attr('src','images/ui/why'+imgInd+'.jpg');*/
                });
            }
        )
    }
  };

  var vrHtml=new function(){
    this.tab=function(){
      var item=$('.dg-content-item');
      $('.dg-nav .dg-nav-item').mouseover(function(){
        var i=$(this).index();
        item.addClass('none');
        item.eq(i).removeClass('none')
      })
    }
  }


  var androidHtml=new function(){
      this.slider=function(){
          var i=0;
          var box=$('.zp-content-item-box');
          var len=box.find('ul').length;
          $('.android-zuopin .warp').find('a').click(function(){
              var w=box.find('ul').eq(0).width();
              //console.log(i);
              if($(this).hasClass('next')){
                  i++;
                  if(i==len){i=0}
              }else{
                  i--;
                  if(i<0){i=len-1;}
              }
              box.stop().animate({'left':-w*i},500);
          })
      };
      this.tab=function(){
          var navItem=$('.dagang-nav-item');
          var conItem=$('.dagang-content-item');
          navItem.mouseover(function(){
            var i=parseInt($(this).index());
            var w=$(this).width();
            var pl=parseInt(i*68+i*w+68);
            console.log(pl)
            conItem.addClass('none');
            conItem.eq(i).removeClass('none').css('marginLeft',pl+'px');
          }); 
      };
  };


  var aboutHtml=new function(){
      this.tabChange=function(){
          var navItem=$('.join-nav-item');
          var conItem=$('.join-content-item');
          navItem.click(function(){
              var ind=$(this).index();
              $(this).addClass('current').siblings().removeClass('current');
              conItem.not('.none').fadeOut(300,function(){
                  conItem.eq(ind).fadeIn(200).removeClass('none');
              }).addClass('none');

          })
      };
  };

  var bbsHtml=new function(){
      this.loop=function(){
          var img=$('.loop-box').find('img');
          var next=$('.loop-next');
          var prve=$('.loop-prve');
          var dots=$('.dots').find('li');
          var btn=$('.loop-box').find('a');
          btn.click(function(){
              var m=parseInt(img.attr('src').replace(/[^0-9]/ig,''));
              if($(this).hasClass('loop-next')){
                  m+=1;
                  //alert(m)
                  if(m>5){m=1}
              }else{
                  m-=1;
                  if(m==0){m=5}
                  console.log(m)
              }
              img.stop().fadeOut(300,function(){
                  dots.eq(m-1).addClass('current').siblings().removeClass('current');
                  img.attr('src','images/bbs/loop'+m+'.jpg').fadeIn(200);
              })
          })
      }
  };

  var workHtml=new function(){
      this.tab=function(){
          var list=$('.work-time-list').find('li');
          var tab=$('.work-work-info').find('.tab');
          var len=tab.length;
          list.click(function(){
              $(this).addClass('current').siblings().removeClass('current');
              tab.stop();
              var i=$(this).index();
              for(var m=0;m<len;m++){
                  if(!tab.eq(m).hasClass('none')){
                      tab.eq(m).fadeOut(300,function(){
                          tab.eq(i).fadeIn(200).removeClass('none');
                      }).addClass('none');
                  }
              }
              
          })
      };
      this.imgClick=function(){
          var imgClick=$('#imgClick');
          var img=imgClick.find('img');
          img.click(function(){
          
          })
      }
  };












