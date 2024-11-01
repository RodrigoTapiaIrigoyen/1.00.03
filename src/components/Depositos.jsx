import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCreditCard, FaPaypal, FaBitcoin, FaDollarSign } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const Depositos = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const paymentMethods = [
    { id: 'card', name: 'Credit Card', icon: <FaCreditCard className="h-6 w-6" /> },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal className="h-6 w-6" /> },
    { id: 'crypto', name: 'Cryptocurrency', icon: <FaBitcoin className="h-6 w-6" /> }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Deposit:', { amount, paymentMethod });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-gradient">Deposits</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-white mb-2 text-lg font-semibold">Amount</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaDollarSign className="text-game-accent" />
              </div>
              <input
                type="number"
                min="5"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-primary pl-10"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-4 text-lg font-semibold">Payment Method</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`glass-effect p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    paymentMethod === method.id
                      ? 'ring-2 ring-game-accent bg-game-accent/20 animate-glow'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`${
                      paymentMethod === method.id ? 'text-white' : 'text-game-accent'
                    } transition-colors duration-300 group-hover:animate-bounce`}>
                      {method.icon}
                    </div>
                    <span className="text-white font-medium">{method.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-4 text-lg"
            disabled={!amount || !paymentMethod}
          >
            <div className="flex items-center justify-center space-x-2">
              <FaDollarSign className="text-xl" />
              <span>Complete Deposit</span>
            </div>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Depositos;