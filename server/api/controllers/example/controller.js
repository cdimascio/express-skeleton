const examples = [{id: 1, name: 'example 1'}, {id: 2, name: 'example 2'}];
export class Controller {
  examples(req, res) {
    res.json(examples);
  }
  example(req, res) {
    res.json(examples[req.params.id]);
  }
}
export default new Controller();