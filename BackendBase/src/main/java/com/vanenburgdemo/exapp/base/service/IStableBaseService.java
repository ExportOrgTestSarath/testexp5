package com.vanenburgdemo.exapp.base.service;

import com.vs.rappit.base.logic.ICRUDOperation;
import com.vanenburgdemo.exapp.base.model.StableBase;


public interface IStableBaseService<T extends StableBase> extends ICRUDOperation<T>{
	public T getBySid(String sid);

	
}