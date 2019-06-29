l=[{
    "name" : "John",
    "id": 1,
    "gpa" : 7.8
    },
    {
    "name" : "Rick",
    "id": 2,
    "gpa" : 3.9
    },
    {
    "name" : "Lisa",
    "id": 3,"gpa" : 8.9
},
{
"name" : "John",
"id": 1,
"gpa" : 8.9
}
]
a={distinction:0,Agrade:0,Bgrade:0,Cgrade:0,Fail:0}
ids=[]
for (i=0;i<l.length;i++){
p=l[i]
if(p.id in ids)
{
    a
}
else{
    ids.push(p.ids)
    if(p.gpa>=8){
        a.distinction+=1
    }
    else if(p.gpa>=7 && p.gpa<8){
        a.Agrade+=1
    }
    else if(p.gpa>=6 && p.gpa<7){
        a.Bgrade+=1
    }
    else if(p.gpa>=4 && p.gpa<6){
        a.Cgrade+=1
    }
    else{
        a.Fail+=1
    }
}
}
console.log(a)