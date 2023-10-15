var para=`The Indian film industry is one of the largest in the world, producing over 1200 films yearly in Hindi and many other regional languages (McCarthy). The film industry plays a substantial role in shaping the attitudes, perspectives, and social interactions in Indian society. Studies have shown that there is a correlation between the behavior of people and the films they watch (Huesmann). The increasing occurrence of obscenities in Indian films and the expanding tolerance of the hypersexualized depiction of women have raised concerns over the effects that these films have on society.  To protect women and society from these influences Indian authorities must raise awareness for these issues. The…show more content…
Since 2010, “The rape rates have require any scenes that portray or even slightly influence rape to be`



para=para.toLowerCase();

para=para.replace(/[,.!#$@%&""]/g,'')
console.log(para);

para=para.split(" ");

var newarray=[]
var number='5';
var count=1;
for(let i=0;i<para.length;i++){
	if(para[i]!=number){
        for(let j=i+1;j<para.length;j++){
			if(para[i]==para[j]){
				count++;
				para[j]=number;
			}
		}
		
		newarray.push([para[i],count]);
		count=1;
	}
}
console.log(newarray);

for(let x=0;x<newarray.length;x++){
	for(let y=x+1;y<newarray.length;y++ ){
		if(newarray[x][1]<newarray[y][1]){
			let temp=newarray[x];
			newarray[x]=newarray[y];
			newarray[y]=temp;
		}
	}
}
var top=newarray.slice(0,3);
console.log(top);

var text=""

for(let z=0;z<newarray.length;z++){
	
	text=text+"<h3>"+newarray[z][0]+"---"  +newarray[z][1] + "times "+"</h3>"+"<hr>"
}
document.getElementById('count').innerHTML=text;
