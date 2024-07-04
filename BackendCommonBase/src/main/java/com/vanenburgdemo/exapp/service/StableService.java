package com.vanenburgdemo.exapp.service;

import com.vs.rappit.base.acl.IPerimeterManager;
import com.vanenburgdemo.exapp.base.service.StableBaseService;
import com.vanenburgdemo.exapp.model.Stable;
import com.vanenburgdemo.exapp.service.StablePerimeterImpl;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;


@Service("Stable")
public class StableService extends StableBaseService<Stable> implements IStableService<Stable>{

		@Autowired
		private  StablePerimeterImpl  stablePerimeterImpl;

		public StableService(ChangelogService changelogService) {
		super(Stable.class);	
		setChangelogService(changelogService); 
		
	}
	
}