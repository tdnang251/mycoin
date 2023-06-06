const Block = require('./block')
const Transaction = require('./transaction')

class Blockchain {
    constructor() {
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 2;
      this.pendingTransactions = [];
      this.miningReward = 100;
    }
    
    createGenesisBlock() {
      return new Block(Date.parse('2023-01-01'), [], '0');
    }
    
    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }
    
    minePendingTransactions(miningRewardAddress) {
      if (this.pendingTransactions.length > 0) {
        const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewardTx);
    
        const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);
    
        console.log('Block successfully mined!');
        this.chain.push(block);
    
        this.pendingTransactions = [];

        return true;
      }
    }
    
    addTransaction(transaction) {
      if (!transaction.fromAddress || !transaction.toAddress) {
        throw new Error('Transaction must include from and to address');
      }
  
      if (!transaction.isValid()) {
        throw new Error('Cannot add invalid transaction to chain');
      }
      
      if (transaction.amount <= 0) {
        throw new Error('Transaction amount should be higher than 0');
      }
      
      if (this.getBalanceOfAddress(transaction.fromAddress) < transaction.amount) {
        throw new Error('Not enough balance');
      }
  
      this.pendingTransactions.push(transaction);
      console.log('transaction added: %s', transaction);
    }
  
    getBalanceOfAddress(address) {
      let balance = 100;
  
      for (const block of this.chain) {
        for (const trans of block.transactions) {
          if (trans.fromAddress === address) {
            balance -= trans.amount;
          }
  
          if (trans.toAddress === address) {
            balance += trans.amount;
          }
        }
      }
      // console.log('getBalanceOfAddrees: %s', balance);
      return balance;
    }
  
    getAllTransactionsForWallet(address) {
      const txs = [];
  
      for (const block of this.chain) {
        for (const tx of block.transactions) {
          if (tx.fromAddress === address || tx.toAddress === address) {
            txs.push(tx);
          }
        }
      }
  
      // console.log('get transactions for wallet count: %s', txs.length);
      return txs;
    }

    getAllTransactions() {
      const txs = [];
  
      for (const block of this.chain) {
        for (const tx of block.transactions) {
          txs.push(tx);
        }
      }
      return txs;
    }

    getAllBlocks() {
      const blocks = [];
  
      for (const block of this.chain) {
        blocks.push(block);
      }
      return blocks;
    }
  
    isChainValid() {
      const realGenesis = JSON.stringify(this.createGenesisBlock());
  
      if (realGenesis !== JSON.stringify(this.chain[0])) {
        return false;
      }
  
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
  
        if (!currentBlock.hasValidTransactions()) {
          return false;
        }
  
        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
      }
  
      return true;
    }
  }
  
module.exports = Blockchain;