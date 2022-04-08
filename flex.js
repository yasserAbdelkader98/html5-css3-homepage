
let mainBranchButton = document.getElementById('Main-Branch');
let BranchButton = document.getElementById('Branch');
let branchContainer = document.querySelector('.loc');
let AllBranches = document.querySelectorAll('.loc article');


mainBranchButton.addEventListener('click',function(){
    if(this.checked){
            AllBranches.forEach((branch)=>{
                if(branch.classList.contains('MainBranch')){
                    branch.style.display= 'inline-block';
                }
            })
    }else{
        AllBranches.forEach((branch)=>{
            if(branch.classList.contains('MainBranch')){
                branch.style.display= 'none';
            }})
    }
})

BranchButton.addEventListener('click',function(){
    if(this.checked){
        AllBranches.forEach((branch)=>{
            if(branch.classList.contains('branch')){
                branch.style.display= 'inline-block';
            }
        })
}else{
    AllBranches.forEach((branch)=>{
        if(branch.classList.contains('branch')){
            branch.style.display= 'none';
        }})
}
})

