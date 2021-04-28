import { Component, OnInit } from '@angular/core';
import { WebsocketService } from "../../../websocket.service";
import { SensoricaSocket } from "../sensoricaSocket.service";

@Component({
	selector: 'app-eva',
	templateUrl: './eva.component.html',
	styleUrls: ['./eva.component.css'],
	providers: [WebsocketService, SensoricaSocket]
})
export class EvaComponent implements OnInit
{
	box0_0_src:String;
	box0_1_src:String;
	box0_2_src:String;
	box0_3_src:String;
	box0_4_src:String;

	box1_0_src:String;
	box1_1_src:String;
	box1_2_src:String;
	box1_3_src:String;
	box1_4_src:String;

	box2_0_src:String;
	box2_1_src:String;
	box2_2_src:String;
	box2_3_src:String;
	box2_4_src:String;

	box3_0_src:String;
	box3_1_src:String;
	box3_2_src:String;
	box3_3_src:String;
	box3_4_src:String;

	trash_src:String;

	move_up_src:String;
	move_down_src:String;

	status0: number;
	status1: number;
	status2: number;
	status3: number;
	
	status0_src:String;
	status1_src:String;
	status2_src:String;
	status3_src:String;

	embudo : HTMLElement;
	box0_txt : HTMLCollectionOf<HTMLElement>;
	box1_txt : HTMLCollectionOf<HTMLElement>;
	box2_txt : HTMLCollectionOf<HTMLElement>;
	box3_txt : HTMLCollectionOf<HTMLElement>;
	box4_txt : HTMLCollectionOf<HTMLElement>;
	
	emb_pos: number;
	
	imgs_but = [
		{src:'/static/assets/Sensors/EVA/new_imgs/E(6).png', name: 'close_empty'},
		{src:'/static/assets/Sensors/EVA/new_imgs/E(7).png', name: 'open_empty'},
		{src:'/static/assets/Sensors/EVA/new_imgs/E(8).png', name: 'open_full'},
		{src:'/static/assets/Sensors/EVA/new_imgs/E(9).png', name: 'close_full'},

		{src:'/static/assets/Sensors/EVA/new_imgs/E(10).png', name: 'close_empty_2'},
		{src:'/static/assets/Sensors/EVA/new_imgs/E(11).png', name: 'open_empty_2'},
		// {src:'/static/assets/Sensors/EVA/new_imgs/E(8).png', name: 'open_full'},
		// {src:'/static/assets/Sensors/EVA/new_imgs/E(9).png', name: 'close_full'},
	];

	status_imgs_but = [
		{src:'/static/assets/Sensors/EVA/new_imgs/E(16).png', name: 'close_boxes'},
		{src:'/static/assets/Sensors/EVA/new_imgs/E(17).png', name: 'open_boxes'}
	];

	move_imgs_but = [
		{src:'/static/assets/Sensors/EVA/new_imgs/E(14).png', name: 'close_boxes'},
		{src:'/static/assets/Sensors/EVA/new_imgs/E(15).png', name: 'open_boxes'}
	];

	trash_imgs_but = [
		{src:'/static/assets/Sensors/EVA/new_imgs/E(5).png', name: 'trash'}
	];

	constructor(private sensoricaSocket: SensoricaSocket)
	{
		// sensoricaSocket.messages.subscribe(msg => {
		// 	console.log(" EvaComponent: new message");
		// });
		this.box0_0_src = this.imgs_but[0].src;
		this.box0_1_src = this.imgs_but[4].src;
		this.box0_2_src = this.imgs_but[4].src;
		this.box0_3_src = this.imgs_but[4].src;
		this.box0_4_src = this.imgs_but[4].src;

		this.box1_0_src = this.imgs_but[4].src;
		this.box1_1_src = this.imgs_but[4].src;
		this.box1_2_src = this.imgs_but[4].src;
		this.box1_3_src = this.imgs_but[4].src;
		this.box1_4_src = this.imgs_but[4].src;

		this.box2_0_src = this.imgs_but[4].src;
		this.box2_1_src = this.imgs_but[4].src;
		this.box2_2_src = this.imgs_but[4].src;
		this.box2_3_src = this.imgs_but[4].src;
		this.box2_4_src = this.imgs_but[4].src;

		this.box3_0_src = this.imgs_but[4].src;
		this.box3_1_src = this.imgs_but[4].src;
		this.box3_2_src = this.imgs_but[4].src;
		this.box3_3_src = this.imgs_but[4].src;
		this.box3_4_src = this.imgs_but[4].src;

		this.status0 = 0;
		this.status1 = 0;
		this.status2 = 0;
		this.status3 = 0;
		this.status0_src = this.status_imgs_but[0].src;
		this.status1_src = this.status_imgs_but[0].src;
		this.status2_src = this.status_imgs_but[0].src;
		this.status3_src = this.status_imgs_but[0].src;

		this.move_up_src = this.move_imgs_but[0].src;
		this.move_down_src = this.move_imgs_but[1].src;

		this.trash_src = this.trash_imgs_but[0].src;
	}
	ngOnInit()
	{
		this.embudo = document.getElementById('embudo') as HTMLElement;
		console.log(this.embudo);
		this.emb_pos = 320;
		this.embudo.style.top = String(this.emb_pos)+"px";
	}

	private message = {
		id		:	'get_value',
		object	:	'object',
		action	:	'action',
		param	:	'box',
		value	:	'0'
	};

	box_change(box:number, state:number)
	{
		console.log("Changing box.");
		if(box==0)
		{
			this.box0_0_src = this.imgs_but[state-4].src;
			this.box0_1_src = this.imgs_but[state].src;
			this.box0_2_src = this.imgs_but[state].src;
			this.box0_3_src = this.imgs_but[state].src;
			this.box0_4_src = this.imgs_but[state].src;

			this.box0_txt = document.getElementsByClassName('eva_box0_txt') as HTMLCollectionOf<HTMLElement>;
			for (var i = 0; i < this.box0_txt.length; ++i)
			{
				if(this.box0_txt[i].style.color == "rgb(228, 181, 3)")
				{
					this.box0_txt[i].style.color = "black";
				}
				else
				{
					this.box0_txt[i].style.color = "#e4b503";
				}
			}
		}
		if(box==1)
		{
			this.box1_0_src = this.imgs_but[state].src;
			this.box1_1_src = this.imgs_but[state].src;
			this.box1_2_src = this.imgs_but[state].src;
			this.box1_3_src = this.imgs_but[state].src;
			this.box1_4_src = this.imgs_but[state].src;

			this.box1_txt = document.getElementsByClassName('eva_box1_txt') as HTMLCollectionOf<HTMLElement>;
			for (var i = 0; i < this.box1_txt.length; ++i)
			{
				if(this.box1_txt[i].style.color == "rgb(228, 181, 3)")
				{
					this.box1_txt[i].style.color = "black";
				}
				else
				{
					this.box1_txt[i].style.color = "#e4b503";
				}
			}
		}
		if(box==2)
		{
			this.box2_0_src = this.imgs_but[state].src;
			this.box2_1_src = this.imgs_but[state].src;
			this.box2_2_src = this.imgs_but[state].src;
			this.box2_3_src = this.imgs_but[state].src;
			this.box2_4_src = this.imgs_but[state].src;

			this.box2_txt = document.getElementsByClassName('eva_box2_txt') as HTMLCollectionOf<HTMLElement>;
			for (var i = 0; i < this.box2_txt.length; ++i)
			{
				if(this.box2_txt[i].style.color == "rgb(228, 181, 3)")
				{
					this.box2_txt[i].style.color = "black";
				}
				else
				{
					this.box2_txt[i].style.color = "#e4b503";
				}
			}
		}
		if(box==3)
		{
			this.box3_0_src = this.imgs_but[state].src;
			this.box3_1_src = this.imgs_but[state].src;
			this.box3_2_src = this.imgs_but[state].src;
			this.box3_3_src = this.imgs_but[state].src;
			this.box3_4_src = this.imgs_but[state].src;

			this.box3_txt = document.getElementsByClassName('eva_box3_txt') as HTMLCollectionOf<HTMLElement>;
			for (var i = 0; i < this.box3_txt.length; ++i)
			{
				if(this.box3_txt[i].style.color == "rgb(228, 181, 3)")
				{
					this.box3_txt[i].style.color = "black";
				}
				else
				{
					this.box3_txt[i].style.color = "#e4b503";
				}
			}
		}
	}
	status_change(imageNameObject, status:number)
	{
		console.log("Changing box.");
		if(status==0)
		{
			if(this.status0==0)
			{
				this.status0_src = this.status_imgs_but[1].src;
				this.status0 = 1;
				this.box_change(0,5);
			}
			else if(this.status0==1)
			{
				this.status0_src = this.status_imgs_but[0].src;
				this.status0 = 0;
				this.box_change(0,4);
			}
		}
		if(status==1)
		{
			if(this.status1==0)
			{
				this.status1_src = this.status_imgs_but[1].src;
				this.status1 = 1;
				this.box_change(1,5);
			}
			else if(this.status1==1)
			{
				this.status1_src = this.status_imgs_but[0].src;
				this.status1 = 0;
				this.box_change(1,4);
			}
		}
		if(status==2)
		{
			if(this.status2==0)
			{
				this.status2_src = this.status_imgs_but[1].src;
				this.status2 = 1;
				this.box_change(2,5);
			}
			else if(this.status2==1)
			{
				this.status2_src = this.status_imgs_but[0].src;
				this.status2 = 0;
				this.box_change(2,4);
			}
		}
		if(status==3)
		{
			if(this.status3==0)
			{
				this.status3_src = this.status_imgs_but[1].src;
				this.status3 = 1;
				this.box_change(3,5);
			}
			else if(this.status3==1)
			{
				this.status3_src = this.status_imgs_but[0].src;
				this.status3 = 0;
				this.box_change(3,4);
			}
		}
	}
	eva_move(dir: String)
	{
		console.log("EVA move.");
		if(dir=="up")
		{
			console.log(" Up.");
			this.emb_pos = this.emb_pos - 10;
			
		}
		if(dir=="down")
		{
			console.log(" Down.");
			this.emb_pos = this.emb_pos + 10;
		}
		if(dir=="stop")
		{
			console.log(" Down.");
			this.emb_pos = this.emb_pos;
		}
		this.embudo.style.top = String(this.emb_pos)+'px';
	}
	eva_mix()
	{
		console.log("EVA mix.");
		this.sensoricaSocket.messages.next(this.message);
	}
	eva_leave()
	{
		console.log("EVA leave.");
	}
}
