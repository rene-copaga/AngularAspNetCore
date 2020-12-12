namespace ServerApp.Models
{
    public class CartProductSelection
    {
        public long productId { get; set; }
        public string name { get; set; }
        public decimal price { get; set; }
        public int quantity { get; set; }
    }
}
