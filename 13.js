
            window.onload = function () {


                var table = document.getElementById('tab1');
                var tbody = table.getElementsByTagName('tbody')[0];
                var trs = tbody.getElementsByTagName('tr');
                var tdContent = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerHTML;
                var tdText = table.tBodies[0].rows[1].cells[1].innerHTML;
                var oldColor = '';


                //搜索search与排序arr.sort
                var searchField = document.getElementById('searchField');
                var searchBtn = document.getElementById('searchBtn');
                var sortUp = document.getElementById('sortUp');
                var sortDown= document.getElementById('sortDown');
                var trArr = []; //trArr

                //sort age
                sortUp.onclick = function () {
                    for (let i = 0; i < trs.length; i++) {
                        trArr[i] = table.tBodies[0].rows[i];
                    }

                    trArr.sort(function (a, b) {
                        var n1 = parseInt(a.cells[3].innerHTML);
                        var n2 = parseInt(b.cells[3].innerHTML);
                        return n2 - n1;
                    });

                    for (let i = 0; i < trArr.length; i++) {
                        tbody.appendChild(trArr[i]);
                    }
                }

                sortDown.onclick = function () {
                    for (let i = 0; i < trs.length; i++) {
                        trArr[i] = table.tBodies[0].rows[i];
                    }

                    trArr.sort(function (a, b) {
                        var n1 = parseInt(a.cells[3].innerHTML);
                        var n2 = parseInt(b.cells[3].innerHTML);
                        return n1 - n2;
                    });

                    for (let i = 0; i < trArr.length; i++) {
                        tbody.appendChild(trArr[i]);
                    }
                }

                //input string match string
                searchBtn.onclick = function () {
                    for (let i = 0; i < table.tBodies[0].rows.length; i++) {
                        var cellContent = table.tBodies[0].rows[i].cells[2].innerHTML.toLowerCase();
                        var searchInput = searchField.value.toLowerCase();
                        console.log(searchInput);
                        
                        var arr = searchInput.split(' ');
                        // table.tBodies[0].rows[i].style.background = '';
                        //table.tBodies[0].rows[i].style.background = '';
                        for (let j = 0; j < arr.length; j++) {
                            if (cellContent.search(arr[j]) != -1) {
                                
                                table.tBodies[0].rows[i].style.backgroundColor = 'yellow';
                            }
                        }
                    }
                }

                // var name=$('#name');
                var name = document.getElementById('name');
                //var age=$('#age');
                var age = document.getElementById('age');
                //var addBtn=$('#add');
                var addBtn = document.getElementById('add');
                var id = trs.length + 1;
                // var id = $('table tbody tr').length + 1;

                // Add new user to table-row
                addBtn.onclick = function () {
                    var newTr = document.createElement('tr');

                    var newTd = document.createElement('td');
                    newTd.innerHTML = '<input class="checkbox form-check-input" type="checkbox" id="checkbox'+(id++)+'">';
                    newTr.appendChild(newTd);

                    var newTd = document.createElement('td');
                    newTd.innerHTML = id++;
                    newTr.appendChild(newTd);

                    var newTd = document.createElement('td');
                    console.log(newTd);
                    newTd.innerHTML = name.value;
                    newTr.appendChild(newTd);

                    var newTd = document.createElement('td');
                    newTd.innerHTML = age.value;
                    newTr.appendChild(newTd);

                    var newTd = document.createElement('td');
                    newTd.innerHTML = '<a href="javascript:;">删除</a>';
                    newTd.id = 'delete';

                    newTd.getElementsByTagName('a')[0].onclick = function () {
                        table.tBodies[0].removeChild(this.parentNode.parentNode);
                    }

                    newTr.append(newTd);

                    tbody.append(newTr);
                }



                //for (let i = 0; i < table.tBodies[0].rows.length; i++) {
                    // JS 1.
                    // table.tBodies[0].rows[i].onmouseenter=function(){
                    //     oldColor=this.style.background;
                    //     this.style.background='yellow';
                    // };

                    // table.tBodies[0].rows[i].onmouseleave=function(){
                    //     this.style.background=oldColor;
                    // };

                    // JS 2
                    // table.tBodies[0].rows[i].addEventListener('mouseleave',function(){
                    //     this.style.background=oldColor;
                    // })

                    // if (i%2) {
                    //     table.tBodies[0].rows[i].style.background='#ccc';
                    // }else{
                    //     table.tBodies[0].rows[i].style.background=';'
                    // }
                //}

                //jquery
                // var evenTrs = $('tbody tr:even')
                // var oldColor2 = '';
                // for(let i=0;i<evenTrs.length;i++){
                //     //evenTrs[i].css('background','green');
                //    evenTrs[i].style.background='green';
                // }
                // evenTrs.css('background', 'lightgreen');
                // $('tbody tr:odd').css('background', 'orange');

                // $('tbody tr').on('mouseover',ChangeColor);
                // $('tbody tr').on('mouseout',BackColor);
                // function ChangeColor(e)
                // {
                //     //console.log(e.target);//tr value
                //     oldColor2=$(this).css('background-color');
                //     $(this).css('background','yellow');
                // }
                // function BackColor()
                // {
                //     $(this).css('background',oldColor2);

                // }


// Delete button
  var deleteBtn=document.getElementById('deleteRow');
  deleteBtn.addEventListener('click',function(){
  console.log('parentNode'+this.parentNode.parentNode);
  
  tbody.removeChild(this.parentNode.parentNode);
});
// Delete button

//checkbox
var checkboxAll=document.getElementById('checkbox');
checkboxAll.onclick=function(e){
    var checkboxes=tbody.getElementsByClassName('checkbox');
    for(let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked=this.checked;
    }
}
//checkbox

//test sort-
                // var ulList=document.getElementById('ulList');
                // var liTag=ulList.getElementsByTagName('li');
                // var sortNum=document.getElementById('sortNum');
                // var liArr=[];
                // sortNum.onclick=function(){

                // for(let i=0;i<liTag.length;i++){
                //     liArr[i]=liTag[i];
                // }

                // liArr.sort((a,b)=>a.innerHTML-b.innerHTML);
                // console.log('liArr: '+liArr.sort((a,b)=>a.innerHTML-b.innerHTML));
                // for(let i=0;i<liArr.length;i++){
                // ulList.appendChild(liArr[i]);
                // }
                // }
//test 

            };
