module.exports = {   
    // get all user   
    index (req, res) {     res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')   
}, 
 
  // create user   
  create (req, res) {    
       res.send('ทาํการสร้างผใู้ชง้าน: ' + JSON.stringify(req.body))   
    }, 
 
  // edit user, suspend, active  
   put (req, res) {    
        res.send('ทําการแก้ไขผุ้ใช้งาน: ' + req.params.userId + ' : ' + 
   JSON.stringify(req.body))   
}, 
 
  // delete user
  remove (req, res) {     
      res.send('ทาํการลบผใุ้ชง้าน: ' + req.params.userId + ' : ' + 
      JSON.stringify(req.body))   }, 
 
  // get user by id   
  show (req, res) {     res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
  }
} 