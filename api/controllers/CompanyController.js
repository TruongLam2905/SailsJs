module.exports = {
  async create(req,res) {
    try {
      let params = req.allParams();
      if (!params.name) {
        return res.badRequest({err: 'error'});
      }
      console.log(params);
      const results = await Company.create({
        name: params.name,
        city: params.city,
        address: params.address,
        user: req.user
      });
      return res.ok(results);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async find(req,res) {
    try {
      const companies = await Company.find();
      return res.ok(companies);
    } catch (e) {
      return res.serverError(e);
    }
  },
  async findOne(req,res) {
    try {
      const company = await Company.findOne({
        id: req.params.id
      });
      return res.ok(company);
    } catch (e) {
      return res.serverError(e);
    }
  },
  async update(req,res) {
    try {
      let params = req.allParams();
      let atributes = {};
      if(params.name) {
        atributes.name = params.name;
      }
      if(params.city) {
        atributes.city = params.city;
      }
      if(params.address) {
        atributes.address = params.address;
      }
      const result = await Company.update({id:req.params.id}, atributes)
      return res.ok(result);
    } catch (e) {
      return res.serverError(e);
    }
  },
  async delete(req,res) {
    try {
      const result = await Company.destroy({
        id: req.params.id
      })
      return res.ok(result);
    } catch (e) {
      return res.serverError(e);
    }
  }
}
